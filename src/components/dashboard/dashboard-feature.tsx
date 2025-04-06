/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "3rYFKjCMsuYgZ9MhUKUuXVkSU2dbhFe34qVKBCabjLjXJ1xPp3jBAYReZxKjqjA7ppGdxYJAN93XsN8GzHmC4N8B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kZPZCNLceErq7yK5icEu7Jb2Y27DpXgLNchR7BLeHNfY1MFXe1u4YCYnaL1pMPEo9uDcQU9akUZzywPm6vvuoza",
  "key1": "2dFD1WmPGwLn3mEfN4Wq9yJLn4ezH5UXwiKVSoecb4KHa8KPZorLsRnA8Tyu1qYDiWjTxf91RuxBoJYQTT52bNBj",
  "key2": "5YmgZyfNsWeJX9te5NiLLBWrSsXoP2axuwerTmAFffV1fNkjSSEfdrvHR19Vm4Ckhmcs6WYE67DH8SNATN2psqNs",
  "key3": "3tDNvarLZBdtq9kXiC3ykx3wioS8i6JmDpvcb7HC8WcjnmjTaqtbiP2NNBCcMP6ghwVM6kyJi9EJT6ChdEupAxia",
  "key4": "4aShLKEkt2XRUb5vZYxVgnYVHwjsHcS7B3uhDiStrMX34FQTY9aFwuzMwtdM9ADsnDUhikjL2H2uEivGqewSf3pz",
  "key5": "57u4QayUXZ9EmHVSfSxyoEaZJXZH7v1wQhkooTDh4Di9zLXAmUsF8CcTzdv1pS32uVcAsb8Dj92cP4YAg91hXyL4",
  "key6": "2Mvg15CpZvVrRQiRN86sg5XDHAoo1uWcpd2ErVQEdYTBiiurZ1bB3oSYwbbqKtNKpYLwZ9ptr2PKW59nEEWYNKFr",
  "key7": "3mivtt3YZKrPVvWk61MYmVx2wGQUmGpA1wD5PJNpgZPnhNTwUkqobvXasyzjifd7bYknVXWkaR84PTXMJR6PWBpo",
  "key8": "pphTKFKTmvk4rzb3wTNCUaBhgbKhfYUKqhnM6qFN7L5uWPqqJEabSorADdgPccCvWXir3bsEVyYZTesQcbyqMLe",
  "key9": "BybjE7D7XYgFW4f2gthjRPUhas93esGUvJYgk6BNuajDQDScywygv5P8zVJHSSvFy2Tn9QYDkTWWnb4rgCyLgyu",
  "key10": "52752UYXiQVZ7XnXg82WZyty49bZsYVLBUrxH11FDM1gs5r4vMUtCNDpLXC6dxS89hpJNTwLXjHWuuGTzvdhYaM8",
  "key11": "6Q5wiLzXHKJjiLDsFtKLejtkg45rrmj6SM4kSQAmqeULXg7BAVm3vMnGEqyy5hqdmg9qzbu9DsmydpABqKejnk2",
  "key12": "2dNWLwBLotT7THNiPx9TyefuFBSRC6cm9TQpv6bWSghQa6ZX6gz8LHEKpB96nMEoLb9hWUUFqzEeQ7xSKtvsWkJU",
  "key13": "4Vb4Rc6rgXi7pf7UEnCXEcxTFJ716p1eezBFNdY6QYaiKaUWboxx4GCyvqMtacbc7qwr1PkkuQdR6yntgPTXdEjK",
  "key14": "5pbUeJ4j5M1wxnvzJvKZ2s9ntt77uYAsgV3QtuCjiySZDwMSL25txXdWxBv859UFMcvGP2obTFoBn1bkdLdPcWFj",
  "key15": "2PUpmD8yDGk62syHMGXfVnBLzUiv7BoDT4UP9ub1Fctd8wGaPiBsNdcXnLyXuwzkZKQ2BvwSwGvdPxfXtJWxiwRH",
  "key16": "48rY3g7CZt8B5VYxic8EcjfWfrCTpUmAC2unKzYbbd36CwgUPN9pJYt4ZsajLSrVnBSFUc6iuy4fFWtdkjA3vjWN",
  "key17": "3NhwP6kfbk8nSKZcWzzPQKVtRdJKjtRmUNQwka8bXi34hw5BdNXJJZdK8dXonjQrnQSK6xWZc9VnoFRrxAhvuhky",
  "key18": "BHYqdGgXHDtfXsfe9hibAQgeaxBAkX6g13HDFi3QrUnAuwZ58UUWpny48Dy1Qcas1QXtnVBZ8mKwCMGZah3uR7q",
  "key19": "5RpBJdxu5YYdtEhhe8rVfuouqda9Kwbdrke7VppgcZFRCmJ4TJR2VJ2Vvg1DZ8TACbimzkS5zKUD8j8frBR6Doyf",
  "key20": "3Xp7VkDWpKtHSmK9AE7RcabxiiCWHQXcGNVpY5jBhSrwjtSZdbsWVTKt4o4N3aLR8TCGQqoYpZF4HPBB6Q3GDhSt",
  "key21": "3brGKRWox4b4zhwUeGxTvgSYtuDAFgXz4ad6d2GQyZNrGVaJocxUYPpprhc9WBAhMaAFesRcxbcV9rt3Gj8Tud2N",
  "key22": "2aNhoWwbYAyKE1Rhx7GJbbUSkEMoyzuKF5zuA1BqS3wkU8SaCTYjDTgobctJp8VNKPShvYnhEsLRoV8e2h2eadfM",
  "key23": "QtYdRdmhiaRvF3jem77CdUweCtDpeiLn8s5XGgV592Dn8uJRGHcNK1XTgpZbKv1CLZGo5GeUMu9RXfcYWRH3wvY",
  "key24": "5k3U4T356PBamsLx6mam7Fn4fHoD8tGiAabKoBzrbnTqtxUvdFv6vdQcuy4KYgdSyc7kcY7oXkjDbKuv5EjprE1X",
  "key25": "5aMAeqRgMSPw5kWzeep5rjiz2VvSgwr8JzTNwKkA6Tr2hKs1dx7M7qSqFThEne5jq8TfN2UwfoVxnpBwXfgxNKmS",
  "key26": "3eAeVo5wKNpaKToaeziPoUppMWAdN7NfoyfC8bDedgrqiByPP4W3w2XYzdZtNFdFyXiG2WSn4mkVwZ129WcUa7RL",
  "key27": "3ryXY8tiyMmy5xSW8p1utCM7Tim7rsc2WNsJafQUpcTA9mCcstM2hudnaQXeJnrfCKWAte1XB9USb6Mtd8nWP13V",
  "key28": "tVweMK7cVdAtt3oPYNdQyg8RXWpeQmBbskwc72pj2Xab5ECZxynBjEN6n9rV29245eJxKsXTLxzrs9gHe7ommMT",
  "key29": "3yDy9cmguZVfYKAFhGHCoH3XA3oKRF37GXkmHPKjc1ZdnnXrEBHzUrct9ntFHBx63vdghtdDZs65CdgkgcFo8E2H",
  "key30": "4YscpoGUrXMLq562qA4pRo8qn5SDezfNK8uD6KDHKychLrEuW5t78ACXV9kncFcK9N2AfeUXaGFm9Tp5Csqp1WHk"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
