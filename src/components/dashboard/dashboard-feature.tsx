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
    "2A2jGz47fPMBs11Feik9Ea7vr8dbCfjYB16fs9UHfzBTF1WhbSG7jEsi9uNgys2MUBv6LXuyDo9Uz2ixsb2RAdn6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54VgoqcAyXHfL5J2kjJCW1sf9VgNMPWShKPaKnnrBKGLU8H5DAbwrXJyayqNMm3TeBKegV4HQYjsdJjsYK33JgCk",
  "key1": "6285USVRpBx1Z4XDQK9jHW8n2cNw6CwoWGXXGJsTCxJJvcNxF48CxCYbVtedhtZEirv82GAk1ZuGy2S8CsAwtyKJ",
  "key2": "2AsvK5AwZcUEe7uVJmEz31XGBo7am4nXLoKDrgZ6sWf9RmQZWveZaQrGZfQxFoNw6S1EBW51GGbYJwPL3SAJ3n9k",
  "key3": "rvF4fvZxmgDxdgQfLDVgM5rixRRbHsc7radFhci9AMQPRzQwUgNLMY8CBmQVTbkMBt6B7T33c56GuN8zwKdcNUK",
  "key4": "2QRVuHz2SkdQ3Ytq9Mpw3gqpnLFEzQNtoNkAZtXdNbw1b7xwJtZqGrPvsQxNww5T7NgTFLYRtFJs7orjvisS5zrj",
  "key5": "3zdyVHn7Ls8T1ehKFZRthDHFVgXEUuwqFTCr8UJrhnbNVPtPkFHJapxmmML9LeQYBWDjYKHuuYd7ykkVR3ozPkwM",
  "key6": "5dHhD5qY51QA5sp5wuMfemq8taLSKjsexsrqJpevKkSbnArYd61iLpbku7XRneh89zhVqbmE9VqJjRzPBpDdmzzo",
  "key7": "3taJ3Migon9WaqBykX95RNaxVsmrFfBi2V2xpeCiPhYNankoggMN3VGm2E1iPhaLw4MwjBzudC4Ga7f1gHS7dkQJ",
  "key8": "2pyGHpBQN3jQxKvgMgq9U9im9S4hmLqcFALUWfp971UhAgp7GmPqLaA2EeMpmxxSWBaZnNiRBLsoCkvPbrxeSi9u",
  "key9": "3YiwgorDVAv6J7cBJeYydaiiLCqbEFkGBwP3cu5TnkgceuUcUJd7etUVf6aS6cHMZiyLqhJtGqfv4HYPT1HrDJvQ",
  "key10": "LTMkg1suoYb2hdgrLgKSrRH87z8do58BiTshrUcjQhq8yhCWj8ef37kfpUGySEYpgHQLdfquaUYauDfTDHsMvD4",
  "key11": "2WZyf6GR9FVFTkzMRtNAWUdft2sxHE4C1uA8UdHZcumEMRuEoD9Mxyn28etDqxwLu3mBQsJjXtiBKVYZJdeHQe1G",
  "key12": "3xrg4cRBWD2EmvJvMWVrMsam1uk4MhfKR8zHovT6dhUKmR84ZFwmgkY9W2mWxsMokHqxpNpiXC7kaRkPRkvHANtP",
  "key13": "5WUWKrPExexE2vhTtHbfshWCXer2D3obdd9p665n3DibYSQpAUVnnVd4HAARL4R8ArsVM9j77Ah7nKbKgvuPgEKa",
  "key14": "52ifw2qEFSwHZ6fc8N6rzx9ecPBw4je3gpCfNvhhqqSRC9JPyaaFfWRyZuFCEpD6GjsCkY3P8ycb24Tygu2pmGfp",
  "key15": "3WSAqXsHgPpU2H952njmmv1DFcvjL6sFrp2XQWkbgxBxeCXXS57ofKbidfJUwRwU7cJG6JoDyz8BFUwcENLW2Vkm",
  "key16": "2ZwCD98Wqt8SxFwJfFTq1J7WfDNpoGKFrkhNKBTaBpFcD1jpXxn8xJjVfYQ8it2XXheR5FFpjpXABPznXppSfwFw",
  "key17": "57SDFRaEk1V5yabLF8fNfb62qUgL8JehCvA5xNfXNt3P7aAwyctzM2svFmrCzeSSSHMWvFM9iU15ARepFfcqG98A",
  "key18": "4JVui1dwfC3jCYXNoCAwKAh1pUwCbmSSuwLFx4GoWZbzd8DC9ajCLq22ZqgSaT1ifU3CAEwrwBhGq2i9nvFQegLM",
  "key19": "i9VX9doppH1hP9eSrmQV4X33eioWPAn7z6z78bjfmVLnV81emBZYN4dyWwnMW8qrWHsh2Xnxih42yqdqmRtJveY",
  "key20": "33BFpi8UEob1CcVNykSGTEHtJdfy3Mqet7PKkoR5GAa7GG3o1EKpkdoRX75FXiRChVdPzEMQNUWPgWQJWGpLw4JQ",
  "key21": "VoPvhdV72HB9ZvRM4Lrkp7MJVnKeftvrgAjkY9c4qE4zKNhbiAuMxvHeN7LMcj5Jr1vKNLJVuuwUMjHSYHQbUyZ",
  "key22": "ZyzaFMTaABiFYa4ATjrqUyKNr589VTz6W6yYFJiS2xL2nFLR58W9gqSe12C1Fpv78tejVE2H8T9ZXBcU7gSejy1",
  "key23": "2rDjdyrftu2JeAE2KMB8tDgCc1jWboSKenN46U2NBKQiXFMmnpuz2DpuMKqYVTT28ixCp7RNzjEKMHPfH9wtJsKy",
  "key24": "BaDHQNtoZtTcKngcBootFnWWRbBs4NemQRwKc9oUBGu3mDZqkbc5iLTjUUQkuJVK2xat5FJSDMV7iBsoiXcX1Ty",
  "key25": "2g3aPHd2hNkTL6PXzpgaAHnYzGjW2uEH3ATyvCVCc9wpQuzS752mhK7VNTke6HfvXxcGF4B9LhVKqoVPXu2bWsiP",
  "key26": "4m8viSnnGEjxehpQ4QSSkQWD3XcGjWgfoqEoQhtAR1yEP9Bx78zyVPjsKgptgTM6Cfhc4n3cw9ntZiyF7nVdeZnx",
  "key27": "62grGpcda2BquZMtiqjomQMKrzZYQzwCkWBgXfw8TK3wVFsEggHALv6mVAPWM8KZrzkYp67zyoECxrvdadM4VPuh",
  "key28": "4VS4TkC7ige1eDCPdhgonZHnmYURNmSMu1HY7etX6EJpJmUKjekkydpGLzHXCBjC2UkP1FAyQDrRLnQGMxp1YaqW",
  "key29": "41ze7wND7ko8mqopK2BuyA7ez2kPhd6TqA5DNfLAra93yq1s1qbFFQxBmqCcXZ6SskNJWDGmFLCrf4NftTSYadgW",
  "key30": "3VpHDBEqXCGStVnqwXoZpvgrVPKwQS8tYcvbFgD1bLTRmfzgCLC8jdfhttRUgs8u33oksNGz2u7ouYggqPiiB18Z",
  "key31": "1gte3GgNYXAmHWC9ZDjNCkpAXURsWUeUUf91LjdtAQ56LqezaoAsn88LkSmvfgXbs4WJxJoVcjaW6iaN9apdMY8",
  "key32": "4VDmdBBpTQhYVMgTT1W4ErZCYe3VFyfSqrC2bVaHQ8fFyLodtNQ7E1ZpzvGhjSezHuU5hkndEeU3LMbKMEDM4wpc",
  "key33": "66y4JDvxwnb2SUmqgUV3zow5VLEfpDKXkQohZR2g7tMwFQKLJ4x6XV4XVakJGbR4Z9HLYFioai1PSxQeV5aG7sxw",
  "key34": "4M1HWVmsuzG9gd3aCA4eVkbthdLswtgxs7qfUaTTvsXV4iWf6TkSrgzN6R5eLeu8dWezr4hpvsKYjxpUMEYeGR5c",
  "key35": "4yMywKmqyRkavzD2xu9gQcy8EB3kAxHNykDJMMVaiANmVi1oz6mnPp7x13gQTgvuQSNzmrA4nXx1sfikSRmWPtd4",
  "key36": "s5JmF7YZpLobEjtjRZE6nrNizpJE1TVuc44akiDixa2C6HL2Sm72WkeJLjMhVrJZeK1Gqng6SzeiJQweXDcuZg6",
  "key37": "3sxgmKCY7LLyFf4uuh2S9GSMHr6pc7S45XJs9D2quT3uBGzEhHzV9mFtrum2bfxmzGSxCWydVTPsvWp7w2dKtCBP"
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
