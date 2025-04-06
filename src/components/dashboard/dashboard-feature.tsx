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
    "4AVZ8RMaRLNmuxd79gDUTGK8moZ9jXyQWmuw7aXMjW3iYNkYBXxv819HGfq5NaE7DAu9fQXBYCepZjjkpX5kogn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MPeULTYbM2EYdFYGk11wxBanQn5EXs4mm6xxAMmnLNh1a7U94dEWke5ELWGzXSbhTqkzrzUiCSfZbAV2CRdTPrq",
  "key1": "4SGrRtWX8e7igs4iPgZV8FtzQw4dsY59ZAZ1bzPRkP1M8sDmRW8nAGP9AGWP2bYDpnXByPBDe9wWuCA5dLrvQkYp",
  "key2": "62c6pcSk1obfm3Sfun8C7oLxDTYqW4e2H5fF6me899NHPBpRp2CogTUzAwgtE4MaVYrqXp1PLRqBTfVusTduHhzG",
  "key3": "7Uyd2Zvb6AWCpd73dQe4xecoF6mWSidbVshN7BifCj7EYansDW6aXAN4pm96pkXAobz8MBpyvT7TErMfeX4DpMJ",
  "key4": "sVofHrt7Bxh4iLbRsb9MocdBMNEELwyMfqJurYDksCjihuKgq2vWpMqBz3G36AGLyBzrC93NapauCNNr3kjzV7Y",
  "key5": "3KRh6HkMpdcHM97zspEexqiaTQAb6eeRdosUAyZAUgyx1t4Bw9437fwxuC9zEiM3LtacbWAJQ4Rhe7k4on7dC5bH",
  "key6": "4hMLiNUyBdL3HnPihAwdbmMecLmDUcK14vSPUjjYLZfcadQdeeXyQ5RTrXtkymtFtsAkjKznsW511ehaELKMQtVH",
  "key7": "YutxKRTezhCS8zKWiLkFQNqFjqoU3nz7PJJGLWT6M8P2j9KMgbMLiUQ75rGta4Uj9vmvgMoMoxpMvYm5bjdD6VQ",
  "key8": "5p524SZMfjouh9PXaUzA5PZD3neMmnY3AiYHkomeVpZW4nxcXuTiK1RYNrae45W9SBLr49PXEhBcvULp9Dz3EvZ7",
  "key9": "55FzCmPqYw5sLRYgo7tuAPuiffsLH1r1sbDVuHJVgLhridkoDYrTzG6T9JuaD1ZXCLF3z2kr241CKcctr1nGQBcr",
  "key10": "4YnuvDCWyfSVJm8MyiprEyWsFPsNDUchAekWLiKYRFozCdxVwppkZJ46hvc26dVZpPnkiVgS7jFzChQELaGZCai8",
  "key11": "htZjv5y63GzvJwKUUdZqMAKZhrvjxcZSkv9giYKFNNVaR7YEJm7dND4RohiLyvts8TgmmmSRsDN674BswGZUeHq",
  "key12": "3AFgBpgYg4g21XKnsD9DNnumWAqqHgjwK8VHBGiyMHaTzVCnH9Q2RMKQievEmmMmttNgX41NbyfuErVLzmFJ1VJt",
  "key13": "243JGh5u8AXPJeoqAeEXU5454WdSYKDWT7csy6yz1ogBXDRkyiYAEb8FRLgxMDhuUsx9L9U4PyfHYmt4tjG1J55t",
  "key14": "3hu6xDq9rmBr2pedqbrp8bKHHue7RzAp1cEYgwscCUJVfgTMjTPRAaddmhqzXx5P1FGxD1fG1XdY1hboEVE4ThKz",
  "key15": "2u52PkRhm7Ne5jr5VcXeo2WtdkAhx3xHRGgCK7GbixALcYnt9UbwYsYDy5qsEYLf8fF5PXAS8xpd85momnAXVACY",
  "key16": "4xvJ51Zsqiqap4DDCKH8VLELGk8t2iKa6RUpkyrRrTh3Lyv2BnmG1dTcK9oBsNfrkqd5W4dKbTQXhyHqN1oQiEyc",
  "key17": "2URnCbD9FAKTUFQuKZmT5MQW5CHZJLMWXaa6LzYtv8ViJrFdSzwnPwyAtV9VnKo8VChrwgeoiMWZfnUFT4rYVR7B",
  "key18": "4vMQZc9aXSNniLvgeLgCTEM4MwcaTPbQabjyZFZvA33isKB4fzNszYwYvt1WbhuFSTzFZm4e6LoY8HdvAeaSBfD2",
  "key19": "5nR6VhGkqkBKczVrWaXct2Hr7rfdYdfeZ8XoXtHDCcThEafijzKANwuBsrX6hzDAMtJAWvoxaSxDv6Vvk17ZJaYT",
  "key20": "35Ph5muCJi8WpQZEPtg5eckdeGUMzF2rjNFBteWzuJsRyWjShkbnFwt4MkmuXgsj1DScHwoxM6XF5K382bMgdkZU",
  "key21": "5UZZQphkrvnnTkn5R8tdXAvY98qAQysbGYorEDj92wzNR9e24JM6baQjdmKbqZU8usBEWcK9Acgu5j2kAVE59sxm",
  "key22": "3UBF3XL5xu7ncDUPwiGV42ho6PYH1GTssBSnqr2oktCCNehBEEfmoRoaoDYJDXDHzfDitWaVzQp7ViYc869oC7W",
  "key23": "4c3KD63vKp2wKVZe2eGATphMwgm3hLtYanm1SgnstyDDiqSZTddA2gp8RJaXbkStnnebFGAybCjLbRWS8dwU9WFc",
  "key24": "282b8UTcMkPQQnFpDWsY1VK4nM6cuW7jSKqMrasxMbvuWKr43LksW1pLWwiQ8zFZPy5TJMmQwVeCahVLPqD7ofHz",
  "key25": "3LeJqeZtspdoYwDVNnJ2Ka9ZU6s8cSbXs9doFSBfuTnEmWJKgC3s1yRkY6YcgJcFdpDz9JSZ9DvZk25A2nVsA8bj",
  "key26": "4o3YrpjtqTKdtsCxaFmf6bEhEZJwMXRVabKBcUFii24zwmAgoUX9odD2cngNog5kAweznfDfL71DhgZZo8VS4CH6",
  "key27": "5A7cXMnBB8QhXx3akEpuXHEML3E5rHgVb5vNY46vVQ4b2avJHogRMTgNzKKd3pHWNVbSB9kS75UsZ7XvDABcgJJf",
  "key28": "49fpZGhJgYjxvVFoSpNYd3G4Mk2gSgBrc5rcNKwjFM6X8HpeFvBsdrnQ8vyaEeKm6X8cAwwQ6rEBvYMNwSUDceg",
  "key29": "2bBJa5rsQ2pyumTry1tSCuGGuUFLMYCxViiiN9JCXrn3vkNDmNQqW82Ywpm4sPgS2qfTMjdC6f9TmRSUWdYJah82",
  "key30": "35BXH9EvgMgcY4ad7nEW8QX5kQWsmhNB8ej4FZgQ4eLTdjmXzN2UYEAGiRrpmoUTxqMBgDxF6TxHfp5ohqdx5WCr"
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
