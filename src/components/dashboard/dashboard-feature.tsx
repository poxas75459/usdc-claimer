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
    "zsSu2kiECq16DAg1XyV6cHNsL7JWorTHj44pbBePwQEsucpPNuL6uXWGwdoh9uj2P5hFBvYXajZp8QJZk1YhrSy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31JT4kceTsgpnDGoP8WSdh5crXRK7gpBeF67C2xJfjJgRA6w3FegSDtRCaWk4QVGPmsQAXrXw1zTP3KDHGEefaKm",
  "key1": "4C1mySq8eZwZdspVbL9Y82KNqa681ofLkVpLqJfT4dTU28CLrxKX3rbf9ii5rKWeSTB7rv7cHFyRMzfgnbnFmrtL",
  "key2": "2kXzgsxyECRjPmgVnv6d3zjiD85Qv7kZFC24mPmAFLDUcFBcuCC3X3LxZpQExu347WyKZ37h33nWvn8SSKiSuwCi",
  "key3": "49xdxkmkscvCsboQHnV3Tf263ATGwfHBXsUxjF8kitoe2kz8HuxSnkz85ZQLd4BTLr6RkYSdfsUYUif9EDr3pHUE",
  "key4": "3ZG95qhFyGVN4iyvbkSyE8ShDPrb5Pv2HNkLMANXYCKWDwjrBjJeHxbGpwWyY5nw1Sq6cUJx5KRbkLTYqukqYrXt",
  "key5": "3y5GSwaaa8yQGWDsQwkt99x4d2AuqGHGjbKrrcKxXWvNeb2Mp8eVoUcDVJxWQenZUrjBekNecygWsbR6jy4T8ZWy",
  "key6": "QixinSSqVdjEuxtm8zCCo1qZ85ymdArK3es8KNL9pkG4dh2CiqmdrZbPiUrG6CeLDogGRm8XQugpVGNY6pNApKu",
  "key7": "3xinuSwxuRknrBPzQ4By7oXmdSArXH9fERRgdUivYD4TJLXnWn55igDrajsNWmPch1BnF4kHPHofnQXeNH5qRiT1",
  "key8": "4owpPWZarNhcenWk1wQKJoRFDrhfVf8HkL3c4jHiLUq4Vv9xtTY2SjocB7zuShyJpvTeyZ2Kym5agbgS6gyypHqc",
  "key9": "4NTgFxujLELzKikNKKSswCE34tGJHvNCDyvUqb8LxH1fuMzF9us6o7snZUN4oFZkR4CTkJpAJcMPRkqkpuxCNDfg",
  "key10": "5a7vTnnt71wvq7MH5SLy7PT4xMHfjDG2rS5ZTXsukAaRpHS7EDTPoCi9wrYM8g75amHGCDzZ7nLXeL99ENEivzBg",
  "key11": "46Cb5oVyxs8UkCx7AhmTYqpycJxWz9t4pcEbJ4zT8jUJv2a2Kd54HNqjWHkAEAnD1LRddhgvuetcqSHRXaoi6KLf",
  "key12": "PihXPC7XVMJyPmtYChMvrCWccTHV3xxhett3qkdUgc82za4mqPFJTYdkU6AasKKoRGTrQWHkTWtfcy2X5mXCN8W",
  "key13": "5o9MwLYq3wWLSaKQwZd7RkhVWiYufJX7vpiqfmg9khT25XFPi5dnetwQPkyTXwf8Q3Gg41UzTgskRSknA489fqKa",
  "key14": "4xDkggVHpvwU8nettWm1kDuGZrSRT4jT24RwYgYTddQedBdmVYdkLQpL6wp7u7tKMB5A3zsCYdR5Gj66dQbvUdXa",
  "key15": "483m1JXtdLDvfaPKtMcLMaTDsXLXDSzh75ebb9x8hp2SjgU2UJrJdwYeD35f1psnjSbm4D63PyXwfihTQBBYyN7i",
  "key16": "2bfpG48K4uj3CvSepixoL7reGWo9MfeqYnPxrzjnSRXWA1861sz9kwfyWJZty531QwRgeptnBNaZ6oVB9DAwLxYy",
  "key17": "BycE73Hii5AHqgvTpZ41vYhfKkxLUfzt8W6BNAzWEchGrVVedSPW8cZYBSNtno6eSBXmHdhKcfBLWSJZgPyVy7D",
  "key18": "3UznVT3dAcP8WpxmVhA57DpdHKRaTw4v7A6BwDna4UXZ1wJsBZP6nHVcA4W9fNjzKoPS3PyLfD61kqyninDVazhS",
  "key19": "4jBa1VpAuQHkGLkE8S5KiLtQE65DyNQuBcssz5tHWcb74dazxZpBVbK9hceDN2XP1BrgaDFXStpVXNSjkNU4xvsK",
  "key20": "5p8wGRnWCzd4krQaLnhBCAznJRVaPEnzdbGeFbwhJuhMaCgLkbiXeNS1CCgBuEn8YPaoxpB1vvgruKUnUZNAjBwG",
  "key21": "5zRKpeAmPUg3rWzVLY9ax8fyrevJZ9uNz8kMKGEpFCJWG5gK9YcANFfpLv5jJbaDnUFvCRzibhvESp1USSpGNVsK",
  "key22": "4F58wLFMkhkcJS8ngHd59CSmS9iBDf1Dd8GiitzvquN8DXwH9DQVggLa44Piy5te2cLjJDpXFwcKoVYNoKVKZmbX",
  "key23": "2nMbZfLjMbtM7KCMZFyCrMCj5UaC9pMt3gzkwnBatGh7bSdArz6EveMWWUQ3qubTV1zNnK4BWp2DvciGYv3Rn1b5",
  "key24": "3cLFaGehAWWJwrULpEz5v5HXYU7cEp3zYKg9gq9HLysafrWArVnqbTiofaq12AD2qDa5otCNSLHZQrWrZb5aGvNm",
  "key25": "5LXyKWbH8A5m5shqifXNGYCyCaxWuw4kdFiF1bLVY4jGAsQZEfRHmpvWjz8Y9kGZnN44GQLrzNJKjUhwbYbZ5FYN",
  "key26": "jW38NCQT7WUCsRH57ELC8au46rbpaQ8hxxX9jb1CeuQbH8AT8yEun1ebzGTVsG5XqsTZudQxKAKYoNroSVEUfXK"
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
