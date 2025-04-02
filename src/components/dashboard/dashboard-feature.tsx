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
    "5oq1BjEBavsU5VR8z8xWf6a7CedHtN3nx6FauTkWFNARuW1kxUoe3g2obWwkdACMvBYmf8EdjMXFgSk3iUaEwmyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cNknGPtTp7EmFzW6pm38fGbadwtXLsSd5PybehU1TtpuNErHEq6P3aN6qMa53RpqhWE46nN5hu4WE3dwFMG8a9p",
  "key1": "5cH1Xn6XD2GFqvAymerDFcLKSg6VpVfySKr9WzobWNdirmwzhGrjt8oGX5CnTBnSUfKoHnJ1fN9EvNMmy4SjTRjj",
  "key2": "5L31ZQDbPBuDYAQCkYqunBpTxchwKSCRv5yiyG3kLYMBCfH98CdC9mZiZbaYXd3dV8KPDd3a3Gp2aweZutW6bkXb",
  "key3": "27jVGweGcyqcTDC8LM3eYp285M6Yy15EZE3hFHLvPjVq5Hy8EnGJkLXKrXhGzyZhQ9j9FaPE4tU2S2CnMQNPRXRL",
  "key4": "2ypwU9Q5jEaqX5ekVGGu2BWYFUCKqPZsY74FgTPJ7i7D3GePVRFUJ7gVzKaQR5Ly4vsKsnBaM7eGCQtPPj8KBRWc",
  "key5": "5SvcMSeqoGMwVRjhaw9ZdpqN2X1mmvhg1z9XTwMRLPMdZztekiSd5g4k3S8pggBiE5BCHthaXFyC6QwTGv6TprJ8",
  "key6": "3RXqVRKWzfRxXHPzBr1GoTJaz6DyfhAqFyGUPTrUnwKpqHEWnhdoL5f1Y2gjwKZB2b3Hh8JfFAj2P7d8ftA2CwaH",
  "key7": "2XdqQdTwKponuH9xLA5hG8bpus7hMe8e37zdBZEi6J9biDNj7bsbQCjzkAJr4VNQib5vtp1fqkmxTKpicaNwGy4X",
  "key8": "5cUPaY7Rdv4Qjis2bC67Sz7AmgkVYQAju8dX24TjWSKFGprCYcPyNUBkL1rUWjpctnHxpvSmfjNF3qh2kfCrphiC",
  "key9": "sNy1GAwjwQJPNgJJxiR4E2WaQvgrgLfN6qdy9Gqx2TxSCaGn8qqUG7SSK8dzYMUV4Fn75oyDFkTdSMrspR1o8NQ",
  "key10": "vtwDqw8dnk6VNvCBStUPP4aTYsyPAHtHMbf8yPo42cKUUPgXjGo14GeguzGv3nWLzFMoKj2S2Dounarbc29CigK",
  "key11": "oRfUtcbK8Eu7Gdic8SDBf83Q4jks36h7RBEx2CHpYqmJb4Pi9fNKJKUsyqpR6rq7Vv5mvhuTmecQbR6iBBD5e9U",
  "key12": "2qjWzJdaA11RN4Fm68j5nDXiiFXxrKk94ZHkdiujnyAjLRtKr8GdaijWztT14TVYYfC5WBo4oV6j9hVUcm1FoBE5",
  "key13": "2ZNeKdy9zbEsKZTtEfczyhJVQNU3Qc2TcF6wENuxrAF3bDqAeF8mQiD6qxe7iUCavHb5NZLn1u6uffhiRDKVZVJB",
  "key14": "3xQ7P54oYGUC8vE2bpG9zEJUPdHa7LEhByW6JAcCU46dLhudMC2JRpUUY92tz4J7CD1Ydm3i5ETc7z7KrQqYx822",
  "key15": "2P2cr2TMJeT3qqJe6RVqEVeZWbBZWyURCUKoieTpHL38E7q2jo2fKrTMoTePB75MM5XAuSwzGaYFzLnWHj1yCG6u",
  "key16": "5tpPsFyTsCvyGAy97c2LZzgSsGhWySpzWoLATX6wDkkpKmoYVBYzTVmCiYMj5MKR9j4EQguM7kFgvNcpLXgxhRha",
  "key17": "3KqXL7ipwXnhWAJbH4o3aJwHRs7cS6UVfgKQe9xEFh7B59WSvRMNguEQHaYHsdcdN7hJNZXNE6Wh3RikatDvo47x",
  "key18": "3MfxsKGFkmphm4DUgwnUvW2xLZjURAo1uJmkamVjXLxmhRSWM6WWd6sJZJqJAwhvWHZoEsVxh5FfgKNnFvycninr",
  "key19": "3KVUckqFRRpqrNmNQFWM8ozV4E82akLXK7YgnrwRdut6pxS2h6QfHuBaxCYNVqVyN4Sh3yBUjBCanYnM7t1zymj9",
  "key20": "3cMFXM2eW5p7dBDngZw7p2puw9twaRah7doGrs5HvwSb4k9xq2N7PduQ8zzV3RFE2KtUCwzuCN1uSDsebn7o3AVQ",
  "key21": "zag7ugV31pAeU8HmpxuCyBn4a8NLZdZfn22if9krvKhUgNCDpnD5A3ctMGKrLqheBmyZEobJy2cfwFHTs8goNZb",
  "key22": "64FcPSwGt3JPHKqwcs6UzR169PT2QHQ8yaBNjteiymWu4o9tmsi9KG8fuHatSmhDwUdXrk3az1JgQWcJDyYrJoVj",
  "key23": "4ksSxt4DwLP6Gtkb2BHSJ9pR69DkKDz9hRARieNhtGVVeTU3RkBTWLqqRG1biAh53oXzjnhzfGe7auKbsEFsG3ht",
  "key24": "bnfanzB27xE8F6PLBDPGugPZyRai6VQnTDG4CHjkY2mdDLbcWgm5y415Zq3W8unNc1vBM8D9c3B5ZN4Dr7jLQAD",
  "key25": "2hHpvnMLLEavnW3sj9VMtTt9VynKSZTnNEHRyfa5aCCSe7RbSpxVh6KrP1BQWGKFa8iwdLF3Q5E5EKfaRC9WZy8n",
  "key26": "KGWmg5QfBid9CaUFgVaTd1sgNbUmwHTQTADNdTxv28Vt7SXbuXhPHxbGVcwy2UwU67pgBqRLnBzRp9zKeQXMGAb"
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
