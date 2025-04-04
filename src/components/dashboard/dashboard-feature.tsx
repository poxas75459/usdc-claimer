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
    "2wmPNyHGHnhFTzEkHAbdKCdAVeBjhxmgwx24rocvoK5apdCjM7wbxmmkMDZWgXBUsG5rdXRAuJNqZCpaC3nMYoxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "17aPKr6FjBjoHpBXZKmNRSMiWXSbAsBmkdMVJ3dEHMg1dLHBaxrgxZTn9rFuneGZwv2RvyjMDof8CWMUMHWco5y",
  "key1": "2mr6q5hc19VSrGhqp3nKxAaAGomqMKqhg2NXEVnRu6p9yhx39nuYC67BrsGMSHLWNFZ1KmGY2BZzfguHkvMQRrou",
  "key2": "5uL5caX5k8iV55ybuPYPN8xmNUXDdG5qWMXHgZwvfQ7tR25wcr7yaViPBRFJeBFwEkaL1S8YSgyr1AjknpAr1E6M",
  "key3": "5Bjfj61LJhVA7daPBjTgD2s85gQrVq2gXUdq7WjAYHB3Zj3tFfs2WJjCDFrn4yV6BqG51R678GAYYuZTSCbHCJsv",
  "key4": "43q1p717Fboc8ewp7thSJdLy8KcvRVsZXti12EvfDBKGoJFK4FPhVDe5xAXBhP6YU2iBvPLqAmHWgjVbthCoFsPq",
  "key5": "3J85W5gUU9WQcQwze5cBa6eiLRUoAhG8XHyZ24RxhF1kbwFHxe8fKZ1qyJVT5ZKu6puBvwj8KVDE6761Wzx47M4x",
  "key6": "4GMyzbZu7F6uuMvnP1cgKXFGemQSd5W3aJrPAwhhwv5PADDhuL11wak5Z53M6ZUuvcsSxmGgSbi9aKc67HdVteJX",
  "key7": "SGqfom8tBjxfQbmYn7Ss3P4kyWSXyTeMo5G9obqrYu697vZ26pVa8TiMmmmEUKRFRoGbH91o5gdtVEFgdoh4XP8",
  "key8": "5jEU2LgspHKutL6Zw19rXTBQbGKvWWSankASkxUaz6BMGLT1QT4eLZvddJ1xae9C4x2h6pA2wimdgFe6DvazyD3u",
  "key9": "34QcJ26r7w2E1Ctf25vwKBCHDhzDsjzsvXGfxZoT9jQka9DiYo16zBS8EuyBUiUJ7nmcNQFz1rSWHL5hXGV9oqyy",
  "key10": "45Z3ec8PZhxEaPKtMKMagCsd4BnUJ98ZKkzdzM2A7uotkKdpmeB94A4LwRRJ7eVaHzgvfZwoQFTAnt1jZRP7Zb8a",
  "key11": "48LTbJYWew1EgXYVFkbPyXZTbwQUz8xHABL4dqxGu86hfcYHx93LkEnUeWme36Gm9ZppcELmd6zy7HLjFK6pchg6",
  "key12": "2hpKM7PzJbswYEdX3jhDJfXGLeZ9kzxrzd8qhyBoxKtNty1rg4wnSvCvaeasJ6nuf9K5WJ76SvmK4D6SfDnBz4Zi",
  "key13": "44NgMUxT3qr3u95uvyjGdizkNT89wWaM6duQXc9jVhzXv2cDG5bcDckvLDoiF52iD1JcstwA29ddtJEP4hCCzpYp",
  "key14": "4JCnFJwjonnqnY1KzJB8ibc4qgpHpKiWL1ZFX8DDYtP1hz6Pj7gCD8hFUBzx6adQQ6hUzEG8RLAxWT134HUw9VPa",
  "key15": "pPZatH1DERyqASNVBQ6XQk13aiWow7GJGrBEGN9Ba7o7cZwvLLq6LTPTBaydvSiirpm1taf3YeSY8GLyEburYsc",
  "key16": "vsGEF81Hes65xMC33zCjeZqXEx2xrWFwfMfFpG9EbqoFzJBMHYBQxMjHfTnsmHAsSsjvCm8LfpmhTSu9eE3mRc6",
  "key17": "3RDsJj4mgebL57oCBaFBcqcYx2UfskFoRJMipXQWnNr357wR8FMAwh2CBnHELdp1m8TGsYsLn5EkE6WQdDMnnc7f",
  "key18": "5iaBaj4zMdddaabYnLyDYvNg71uk1mTrVcvnQkHtsFi475Z1E6AYr97HZmM3odZLUbXar2LU1xTYZciMPP474tCX",
  "key19": "2qyUhKP4mm2vFm1WppTmPtTh1QzieRnaA1XjHVk67DmEEtw6gia61BD3K7dqZqET8ceEHVy5yckbnz4352Mi5Cg",
  "key20": "wgz8cDEJsDKAhj25c3M2d6ZZ2rGhNeB8uhL3k2M86gU1S6jdABrETe3RqFgSQfP8yJTEwedeGRvNLGxVHuZfrXh",
  "key21": "32CdNB7mAtB28EbMqRijznsBumwggq6VzMq1PK6GnPodkskY2N9V4NjdeNj6VukhzB7DH3ZSTpTjF1BXodnGa8yj",
  "key22": "4cPNjkZ5EKp2EkMLDan7vbZiykZHYtG2RFKzZ339txw3McoNA3kVP97WBiHsEYexaPYDxbkn3rXe2pGBPv1ED8dT",
  "key23": "64HqMmhQhG869c3mrhydNub4ExhzCHGUjvN93nDxBj1X8kHSRe9XYJTVoBLCqm79KW13gbmcJyNuJxwqyxNHwA7L",
  "key24": "5GyAdCMCPpgTTLnSC6vaNCESRGmuNNjMuLJsRVzKRhAS1iQuVzJSmGSchZTuxUgmBUqxUv7PpCPscMSxdfohUkGS",
  "key25": "3pckLySz4F9quPMtQXY6YMdZe2erxTtbnTgy2my9eiVqXMGpTvGTgXdXuoqFpaGPExS23VobMQrnYoA7XEUmDF4g",
  "key26": "3bRPy3f8VFWqnT46U1eprvWATBag8k2cNeXNzK3Ykhk7n4nsJXgZWsDGRVX2xtUxkSVZu6zsABeSojiYcS3cajQc",
  "key27": "4F8nins8ay8e7UPiHKuHtmyD7nLbPokW8kvWSEuLRBwzspRRzc4fxFSS9aU3sSGwsykgUQCxW8xnrcCJdBgAFuCa",
  "key28": "652n2ciZ8xMZXy7HvAQom5LS2x5ag1PHE2zT6MJupMYGkzGcg7s9B7rDuosx1eX1ZYku8hkXDSi7CejdDhjhiXLh",
  "key29": "3wMrNa8yyy3B8v6N2LxoWtWkTRoyjNbQh6qmKGx4n4ZA3XA46ndWGBkkxYqrhF1NkFkMiBVhVNVB98ZbuuWp9Pfu",
  "key30": "2xM5zE74B7JLA6N1QQ9YynsWgPfQBnjWXM7BxtCtvYAeeGewgRsWBno4mH8m5B9ZJucBKyBcJFW3XMbEmrgHr3zW",
  "key31": "5FLc9D2bDLhcpsUSR6NhdW1m9oaojyXaGiiqcmP4FiAPDiWEuo6Dr1S65ssmbuoW2pFkgMw5S7JrHw1SD7bm7uFN",
  "key32": "43oRWfF1gJRoRQhJmUtaaLc5BGqBAnZV5H9bHdzQrtbE4ZRRb4bEjtTBYPPtoR1QDx2hmiY4JgVvw7gmx4RzUuW8",
  "key33": "2YDK6o7YqJv46JGwHGyKTwXGcceWecg46LWH3X3JeRsmFyzQSF5pwBprT4YycZHY8na9VjutRXu274djsRizG6y3",
  "key34": "BjGSomiASQxvdfBKGU8sUcPJnv3EZ7cW7YFSLL638C8VSxJnxdzc9CwYneZfuSJcyWgHokivfADUeMiXjS5S27k",
  "key35": "6d6Sg16oZE8nqvugr7NtMPVVXLj5GwGjAsQvjEASPmimrwLbeXkf1CPGu9Cp6pe1BLeTcNKjhuU3AbpjiL1ueJP",
  "key36": "4wpqCzgnPA813qHAHHNNYVKK7eR92p2NHdHn3pRM1bayyUgir4ubcynSMBtQech2b3Jzhe7qCtoZeTvQHQGyr2RB",
  "key37": "23rhUdMvdEP5sm83LaUzmtSZ1a9wzvWskG73r8HP9WDmiXBbtwTYoMcEmV37ueLUtvqLNiF75uHvxBNyUsS2LSAE"
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
