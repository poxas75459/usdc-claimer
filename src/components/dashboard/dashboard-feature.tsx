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
    "3RXsFhMjng4d1iePrvMwNQGMB9zbSdvX9Nv6bgEwroZfNzh2ovmNNzYxvu7jRDcs12cuZhQuQ9wU6SxP2k3LMSBQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bjegEiJn94V3XNkJ5LYLPxM74eXKUVJaeCwtQMpg6BoXPRRz2Td4gWjcdF69tbgKUgyZQdzS7CkqydoAnT4EJaQ",
  "key1": "4L8puoXXcRArAij5i9Mc1jSFNrdpPEqpkJEksr3MN2F13j5xMmmEwJHMJ4yTuWAKbMPEkU3N6Qz43DuRtdxrdwsi",
  "key2": "3vCxVcCL6yUbxRUwkycvm1zcf9py46cC4jw2YYffHj2w6E7FY92po2XXaX8N54DCUsXNbfQeXEUx6ModJts9BQK3",
  "key3": "4ZuRmDjfyyteY8Ag6o9tyf5AyrZn55bKP5i6kAT64974bZATNiRCiVSZze8txQKn3ni6NvPucXJFfbvVDeajPSJX",
  "key4": "R6nmYAm3cQxxtkNmBC3CcdGRHkPe3cUdWrrpAFUm6rmjUmqPnZGrgRNsd2D7ZqxDxEHHdpTEPuRERWGvZdGc9CU",
  "key5": "5MQyTbZ7nqo4BVWQMVrAPf1PxWiLMuZEyMgMUTdNKSQESSP4LBCFT1uC5mup3CTtBnSE4jzfCdAHZn3NZuZsQA7H",
  "key6": "4NVDparu6QhrsQHFq3aJw4KajGxtZgYaszWU9ZvLy2p9svp7DLReWumKDWGqx5wgFxJcTqkgR8gmZme4xTtAr9xc",
  "key7": "66doqPyUY64uH6NKEgt7GeA5bXNAQoBvgakjgMR2Kb9RK5LE8Becq5WWxro3ogqCKxEQM3KwUPK1iCHNTD46oP5C",
  "key8": "3jB5JLFVc5nbufxWKfqu1EJA9xCFyK2nBZpakpLsFGCPRFsqvW33sWcijTqT52Zucj7iAPfAX92AWa9AzhWLbHHD",
  "key9": "4e8MEbfMBTJ5YU76BjV39uepd1PqxrrTjU3TDEDEs5RfsR3S8J2ag2MYrqkg9ksnVJSPXWswbhkQQpr5FAzwVcCB",
  "key10": "3CoSjNSobbeZuKG5oZiD22RbmGJZo7RynjBxHTeuLvCMkjVdqDssLbP1U4LJsCtQeNdjKo9wMPqtKCgugqJM4bCi",
  "key11": "37JmV6MvJbYRRbL7UfRsCfLi1opD12eyP1g7KdkPT2hNaJDPV6J1dDpn7q3vEViLf3CJ2UojSVnXv8gUQRzN1wUT",
  "key12": "2mezzkRFBzBJuVTpkFvmVbnXZzdBdEeRUQ67RRcLvFDF9AKGWa7ku9D2YrHTFJYXjMwUEsDuEsKMceLSVQoc7y77",
  "key13": "4PAvwiesVDujv9pTVseZGYTGUhHoR187z7TF4zGSCCNZRP9wUdYg2TMxNYeS28cTHsQeZwZEX3XSdpVQ71S8DZRX",
  "key14": "mdQhNTRnL8dtPpfZbnkFPLgPzHLED7PPCNekLbYgR74h8XqMLk5qHFBsCcCkabjGsUtV4wUo8xp5THEf2oKhTQU",
  "key15": "5nVq33y5DenP9c39qCjw9US6aGNzwQHuZqxUMzgHSbQoZxXBHGbhqmFrcR2UKG3yuT13e9gqxM25nxBeRueKh5Ue",
  "key16": "3sHcjTF5xcC7GRKT9755gZiuu83ynomcMN9b8zcc2iTMoz79ujcQKKcU5mcdWT45z6QZUoEADhb4r8vC9Y9vS5bL",
  "key17": "3otewE9HoTS3TjuG5eFRL1ht8oofqgURDzEsPJdiprPufJ52e595VYXN6tvrjMuxFTZHFb1c5rZTJoyqx3isvCAS",
  "key18": "4vjZWBQ6ZYw9MTcuWudiLG4WCvJFNhiJYXsKzdyZRbUtvJuaJMe4ds3hVwNQqATXHSNgvby1xAphN4d3rAjyhXEp",
  "key19": "3sjqvwW5WFPuHAq45AfoBuAbHcBJmfGCrK6SDJnD7TnrrvCNMMkgwXVMCtKqC3shDusDPH7z5pV1SWyM8GBe4Jo9",
  "key20": "4nvfGZYE8zSWqP5sE5pukRAaaEA6PdouihK99VkFWzvguZhksMsEq5baTpuJd28YG1QnokCY6pnsQvUe2uLbrKc2",
  "key21": "4RPGv9DuQ8WH6ehy7nCSRwX23eZmNBRGEGHiLSuuYSDCGbaE4su8obvNaF1CyjGK2LEgoHuNZfXnYdRWpujvmQcw",
  "key22": "2dbximy9p94B2M1HvuzQfBDJhrhQKazXMaksxXLiYAbewH6Hx3HqEr12MKbJnQKsxo1dR4iQs7kUjfbKLps5LYha",
  "key23": "3T5YAXLct5HBUJcA4BoxCaBArzKTfkWZXLqn44U9jfBATFixcmHjHf1tiTRPwihbdbzfvLfeqGeyJ9Cvgt2U8DsK",
  "key24": "5tpUGjH2JQwZruoQmNmA148wwXuaPr1TLjNuy9kuTDz1fbrjsb9SAXjYnuCbbQ3ApTqRhvbJ1YRkuaLfuut6gFBq",
  "key25": "jzFrMVQzL5eRAstjn2GFNqxJ6zBvMgFRYJeptpgToohY5AQoKdrMUBo1rzhrGLJpfJPcDrkXcjMK3cTguJQ34fm",
  "key26": "34vtAhx18haZ2b7hZ1fEDaYWMiHp7hp5uXLy2NXmh5DzVKNcf1vU4dXwr2rFS3xnSYfDA53WMcHSrBcmtZSvwLff",
  "key27": "2BQNLk1zf7nzuWjZkMuApoQB7DFdjZ8jKZpi9gX2hhPBgdLDkLHRfUhSpiCJZxKdFFoiATWbPWrFzR6B9rAyGDxL"
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
