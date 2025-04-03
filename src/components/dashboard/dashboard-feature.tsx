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
    "2Vt4da8X5kBnDn7SZjhyquu9rmMcRgwpSkgDCSH9yYFdMXZZHZGMKvFNKFKvcAZBNvVHFYzrTCF4tQhGe31dqEAj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZreTcCYNnr7QXBD4RBsrHdyrufKKvEyjgqmSfU3GiDRG6TV6GKL46thmPcEoF8iUawPed786VT5PqrbE7CR49M5",
  "key1": "62e2D9KGQSHWS5pM8RCYLrLtpRTATmpvKE32qrvKd8daJYnULuMGemur6hUZRkk7ZjVjsWr5CUN1Xr3UCU3UP5gu",
  "key2": "5qghqu3v9Df2M7GbXo7G4iJ653d7NKCpiu4f7RVUJUEWvqv5HNK3YrxgFDMusXqKKgCNREz4E3E11j18SHf2vATk",
  "key3": "5rBnx3sqHZvokhvGWNCSmnFZGDEnni61GfeDBa4dqG1oDSQBki1uqe67Wvj5G2Wgsv1yEtpNS3TTi72DZRNwuggj",
  "key4": "3SaaQuFbGvgTnRJJffNji54ZPmrtoENLhpoitfS42NPn4k6irquwMSBupUwPDsPagC5WVSD3Qak351gDJXvHFFxg",
  "key5": "2SXcjNAi1qE2CG8FWvKmkF5cvj2Yx6QmyxZwxPnpyEKdhNebzfishxcyKCYYNo3gmcsBJZN8wkfCJmoQ4T1oVPw3",
  "key6": "5UHFjzVVmqDy8w7FyhcHAcaAdmjKo6dQUQez9NBWpMwzXQZmyUK6zrYKLZBB4R4fsux4XqGwx8hYbyaM2GS4EXsk",
  "key7": "5AkViW3LZwjKdzr2MSPVDb5rLNxTsKeUu85oRYfDB1FVok2zGpyq74xHURCv7wBk4TKULwpu5rKgezo6neqUoNut",
  "key8": "3XkTNbwRnTZBMWP3AxDZBGvP4xzSXLPG2287U4jSfc5DSWFfYrvN7QZVwSK3MmF2WY27rKSPZATghRKDnvTFYiZ5",
  "key9": "39foGg2Q6ciSqqkmwQpJpHz91BSzywA7bGq5i9YzhcBYxkF9Ki7BhkGF4JBBozYZKi61jm4Qj5Q8oG2YC8PtFKCG",
  "key10": "2DRMpQG69oBz3oetHhAdMHff8qJXb5BhGu9ne1JByekD41McyFE76aRHW2Vcu3HbH7UjEqwxamkUu5BJVLBMBubc",
  "key11": "5GFRWRz1EQgxdit8cEipmEHRPNU94C6jy33qmbM981y9TawB3uSeCqpXGUmrQB3ruFndaH2xpBoV5VkxN1651eAN",
  "key12": "CPjAJRfCg6Rf15r8pPwMoFQ4MjJFHEihsyJsFasMKyNpGhNPK4Wy4tCfyaxAsU3u4zcki5drJmsKYXfMJEK4Bye",
  "key13": "62oZdf1EwScUHoVTQjU5Ds6NW4iVdUKYhmZZmnzehPBcy9XXCoWkwbGAVdY75Mb7Yjvewem2D4STEJLkDpET7o99",
  "key14": "4qYCHXDGS3piBBcX2hiJSeJEJGv95eNLBvcjWge7ng4ayHTzPLooucXScsMxaphJ7jfDcsrpbaFsTpa83LF1swsr",
  "key15": "5zNCvUaBw3mW2BvvoZ33dfGVmEBD1yfocDjrjaFeMng6sTqZzjiEsNNDUgfiVs1xBqQbLrz8P41FACQvox2ZoEuF",
  "key16": "2GHLjx5Zqnw5oTCkDgYAzen8vf3enWisba369UbGkbT5AHEBvqLZp2Wm8MjaDc28eB4139z4U9fqu8oUzqBk4GiT",
  "key17": "2gynjKpaN4RPS8hrjYvq8LuVN2JcPPryRBZMVyyWqwXEjLi5ZF3YqKc3YJRHUDdWgHgisFdmmd1g2nziTYyCVyRL",
  "key18": "3hqDYYVzafM4HPR2728QWFFgWNeifxQuEsJbXVCrBoe1DDpYaZGw64vZehZyGmMeRbbe3esjS5dqNbdD39TYdeqi",
  "key19": "2UdYxESPbL583m2qGrtFyKKZGFYSvAAaxicfxkJaLtCTa1yrzUcXE9yXoxtgxFZe3WhqvfBKeYYz9392Fb3XTzhd",
  "key20": "4cghCP2okL7iCZyH3UKavEeTywczKezzrWCKPK5tQzojL2dCdz2H35s1j98qmNAHWcs1bSzeQUhLcRBwAWWoHncm",
  "key21": "2BGnfyUaDJL2NPCFpK79hE5fAb8GmY6TD3mQNn7Xk3HksD93JRYVaCn4zD9jCWNLWrNaqEKsdVYGNnn2yWjujDDQ",
  "key22": "HEqKgZrUC7XUVrHDdgo8VtaejP4FwCuEBRRwahoeCoLdrjQ3BvurhszMKBdoqeNZqz3WRcd9puRN4ykChehiN3y",
  "key23": "2tznvKh6N9EYsUgkd8TySaPoUBnYNBfPH9QHskt4XbX4Ahxuwd87HgMhYMDh9PHJJht3jiDMxcrs2xVKvX8mnsf7",
  "key24": "2BKMUhxBjXrSLfTQfDD9ioNJUUBBXbf1dTakZwj96Wipqtrb8E9GJ7nR2MMYwD63WAEBSx6bC2JX9QCnRXXCYKhb",
  "key25": "2t8sUYMwPUBFkbroUrszUXhm8MQEthHVhXxamY73MSHX45bsPjLH5BwgM17HTo8eV5fkUHm9qptogvEUsqRtapCc",
  "key26": "378LUuemCvtFDe3z93VpMnPUrDwuJvespiEWKvJcNAPBQqzDDGkSmiWEYZbdnqmgtGirrfFeJWwFs4sXVgM96cbV",
  "key27": "2GgvVbeMu9NYWycK4AoNuGJNGN9ajE2iCtSVK7qxZxJ7GVb36YgQjnEqgcWPJENARfVE1RqsRviN4MtXATrnQwV3",
  "key28": "3qW6H4t9HdPDtXH6bGLNsxfS4sxtqH7RgwRdjkHwaCvCZhgB71W5o4xi7D9nyDVvNgQYCaRPVSwhhv4MFb76qj4v",
  "key29": "3RCyHK8D7RGktSESYU2DFMaMhKurCcGedMrT59UDyA9UR3zEaL8sF3Jd8fquNrjqoQ3WAb8DzMdKkjbEPjGu3XSD",
  "key30": "4FrVMtvSK7pBh5nxMihPyz7XUJMGVhtRgBmaKQRdTZXdVGMAG3ioeqZGMYwvWAYejTdpUvZxYA2nGVtJgLg2Z3YL",
  "key31": "3MPp9YdYqgAR7SYF7V9DU9ZRfqD2Xa71K9o7vkqRcQBfpxV7gz3kC7p8w4cLktemf8agBdrhv4AZq3ky8QQFbjeq",
  "key32": "Ny6LaW8Fg7JAdtk2YPnFt6Gfmzx5wGeYJGQzbeufiotsxQqEABK2AzGsuuJnJc6oJBvBBDaATAm76rAZXRSsG3w",
  "key33": "31B8j5JB8V69epKUkV2YWvqvfup3fd8Qky8vB8gT5EUCxs8EzzKh48LAQiebPxLuHaBKACbFw8zx4HmF9CtoNvST",
  "key34": "3pkgdP96Tny9CXGsZpzcMUBEyLnGioa1wJubnJY3ysMU5noKjJcxTcBMzYT42ne3RjDKJscAhSy3pgDDXrNcvp2p",
  "key35": "59joMPDasFHnvp46aSaAP9Mnxa4gqpt8nXQyT95em7bUVWCX9BAJuH2ZdLuydM9XnEd4bRdwyHy8W6HYQawWvRT",
  "key36": "duLtTdRb97BW79yhPgDWhtXexzHyG5Vse2p5qytUe6gAtnNBLW9VGU4NzUr5T6oQpKybMBfUaJRVbcV1rfTYR3N",
  "key37": "5vtsB2g1U932aMjQD75n4koVPBYyfaWRcykHo1iFSSE6XZjdZF3vNR474Jfni5MGs8U6wSdrA4wL3J4STWpfA3oh",
  "key38": "128HU1VwBJmyWaQAcff8RgXL1ZQbmNxB5LEDErHPXmSopwLkDCoEGBr5Uhu5LENwvptyz4eoezVUjYNE77dQrTo4",
  "key39": "61SqHXfAGLbavXsrNRreMtQobBNA9dT6Ertb5zJ31xsVa6QdgKpudEAVdbsPUSFz4edUtKWwNizEGz7fG6J2Y6Gd",
  "key40": "5yrRZRVULwWF4iGAFj4vWPSGF9FEmLDKKzcLGwqBTEfDR2BmB8a2kW9LgZv6G5ZyoB2JQCtqveTzakPcgYwPS9ss",
  "key41": "5pW3fjdiz6L4uDKC3MGRGiVPyKdGwr86zJfsDuy3XYo3AjgT8DmyQifyXm9cqdBYThYEpMqrseQJZ2P3EoQ9D5q9",
  "key42": "2hq71XkTz2ukcNGhVGckqFKeW5wwLwe4rJgu6eY4vo4rq7YZ9h5B4CrsqeWhHWnVvkq9TgFvCmJMcv3fKDS9nRFv",
  "key43": "4dCLqshvoR1N7FukKaiVtHe6ghah9WNDHJAUGnTdUoPu6Z5KtMyAVaL4uiScZ47EJ6AASdZSM1DygrU1izuped7P",
  "key44": "4R5oHTovcFjGK5NUEVzW5ajdFUmZPUgUJAZs7dJuJxeiocKqRapeZHecz8C46aFZfmazRSC1Xh4PTHs1E9gyf9LK",
  "key45": "4eZanRTuzacbKv6kb1f74P8M9JEwGGrUjxnSEnVaUcu16jdSfwi8aPpXikeQCTf28cAT7DhHfjy9nzLKDJoZiPVK",
  "key46": "5Kz51h4WztMJrj9eoPBofni1zPP4nEwih7jhZ9yLhBT1qmm6Ryk5tGX9wFcZpVxLyzadJPDM1vcCmFQof1GSHwAK",
  "key47": "3qDr25jaRwsVQvjAF3rY4Yc7rKvZQTpHWecQmYW56WaKgAJGKtLxNCpdDU2qQ2EVCEQVdJpPKFp9DdMwQB1ATxvj",
  "key48": "3ujyJcJSTBiUFCAyfPnvmYs4PCmEk4LuK6QNzVcUjb3ESGJDkiE1cRmMHC5ePiS8Nva9aEAAGwDkULjBUqPshzQh",
  "key49": "29GEN6528J61NGVGNnrrdoygPH8smY6UYccBJntBMFfRSZSeG6Nn4YtPVtsBxZofEod7A8CzWX4MkDc3kYz4Fu96"
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
