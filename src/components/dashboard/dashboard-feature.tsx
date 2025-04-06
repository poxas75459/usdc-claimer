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
    "5p27sS1SzD5pyQ5uHW9F7SoAUDpKW3AZg3mMdigkrN8rNvJeR1fM8iR9i36MhG9SFE277UVVE4b56qm8oPu5iZL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eEAHPNKqQ7tjrE75m7xh7EPW11TuvA9QXVcV2A9oeWfmb3LwK9jwRSoj81HQ9xkfKEJbJ75YphQhCgC6TqTZSdV",
  "key1": "5x6ootCFHzkVb9eWtM4kGBHnQqQaeKFuyyKs4QdpArnEjFtn9BdGipMM5WnABLs3DSub3RoNdctRhpS8zo44i16e",
  "key2": "5x7qifg4G7Xiqo4cqQUWgGjaLdGtF43WsBeqGhv1abYP9pBp5YRdMD8EbzkL8vreyZ8TPFnagtGvshbBLHKX7x1V",
  "key3": "3QEKhMJmsNYAVVf7LeJuM9VB2aqAR5C3aCqBYaT4DWToJWgNSBWVawQun2JQ7JhUzJbENW6XDM1S31Z72LysFFjV",
  "key4": "zg4JJ6TjotZv6pD2uGNrZPVVEk9AbtRCjvtdec57JsSW6Bi3ETKKJH8NgUtgXN6PhUDsuT9uurGiegwrkEduKMN",
  "key5": "5C6e7PipZFABkbrRdnTNPiaGHFhRtQL2TynvQT6QVwatHXj2SJGmip6Rnfs5V5V5uKFQs7KvfJByhjeGEwoQ9sJF",
  "key6": "5cfe3bgkjQdDxLxZGRhhs1k19dxPZDgXutQUk3SpEnT63p7dP63mAwoKZcw22eQaRQKEJA8kzKiLQXwhgFbVZV9W",
  "key7": "5HmwbUXLMbxbkcq81uYVPqkrNu31UhcM4LhmgXdx1syRybhAnkVrTWDHJNqHxvZ6pHYdtLWbq9qBVpEPWfiePoCJ",
  "key8": "2GqKAqxFHzBWa1UASxoELgGmsGj7boMEbdjeBTdzbhrhs4cQter5eoq2oop7c2YzrajHVGNuRGnUWJCYbAFbZsFo",
  "key9": "3HePShyvz4fG76GXHwozDCrE3PFSacKnEjAkBgY7DeYiCchBdCUH1fCHY6C7G3H736pGeuZtVRx8LREyewfDmrCn",
  "key10": "5T374p4hfLHjAqiYwqACxHCVyZBxHSEeDLB4M8wCHK6ssisGhd5gu8BmWHHSToXPg2YpegUvQNY52k2t8Qc6NZVK",
  "key11": "q97s1GcvRV5E4nxNPuHyNPuNBmYurd4hD4wFL5BDT2srwjjZC5JjPjToByZxdCotKrwPwn68KwAZEQaVof6NP1B",
  "key12": "3toMVoVUUFqs1AEnpaQH5zSLsTtaJJNLFMYN6TkFcarqEgpfcBcLjnNfGCP4gcbnv3J9UkPTbEeTTwn5TnwQcunD",
  "key13": "5UAwZZiCAWRy6nGx5YtJgJ69Y41QPbvJt3avxoUdpteuL1ksXeriG58djwQD5FK45rqBHuKUVaCSJYcH9CmngNoZ",
  "key14": "5NQ867vPA3VVpKqzCTuUJ62uAxM3MjYwda5LoV1yLXEwUcxPEsu42BgSoVkPAgcWhTPTgKus1ngNhWGcZEaCvEJg",
  "key15": "3EEUMBzXcEFrnCDiR4SndH57LryUyxaAhDWKTDovvfcCTmWrq5ngzC3fXrxY9FaCMeqzr4kRVWYwvuHUC3JZnSXY",
  "key16": "riUkHxNR8zdRbgu9Eq6Pjjij1xSuvRKfbUABpsAz72TRgXSxPW4pnqYb6mZMUxPWbQfk9qhfKCcsfnmXyWifGLh",
  "key17": "uWPAjVx83f4fecqa9SNmY6E8K6NpXtMdcFtC4GtkGxNVGUW9p2mdM4swKWSuHcKzdCAPV9vykXDMmsw8cxGx1sT",
  "key18": "3QNY52RBAFF7d6krFB73qK1eKioWAMmXoSBqMVucCrewcb2hsxtBJ7xb5W8q32ofzSPcTPomtRmMgsme8DZtgrGC",
  "key19": "3Pvy3tWeULW3yG8cp6sJL86JRGtTQCH1Co6qgikH7V2nSyecqDHzuKR4XK1qWUm4tDXC3hrGJJvCHqeFcHBRLTR9",
  "key20": "4s2P8Fhwe7F8zLzqNYgyXiTvTUTtXudipj4MQqPJcEw1BtdvLhVkJXB9JP28SrJHoJtzmoUcLm4rPbRt7sRefs8C",
  "key21": "5tnLn4GJ8285XCJGVBYjytm5QMyUefd854UDeStwjupbGTNE412SejrG3L97CntQUyKemPgjydX5KdU7x5JyuLsn",
  "key22": "3ro9cP1GopsX4fpHfTX32rxJxLcFLBqwiqFMdTjso7AW2tqzd5CxpXwb78bscSzY7Ar9rnrCy8s8AoSVguaSAAgz",
  "key23": "4i7gS6mdGSTtUhHuxS7yz7QH4x3v5Nbzv6XbGSakEDH9H7aHfU5ik3XBtQNwVq7eiB9CdWayA3FDrZjmoqrTgTYL",
  "key24": "2TgbACrMDMWbYhXC1yLsJGHXPBo9y5EsdVW935NU4ev9KbJMGTNfveVmmMqBsm1JfCNZiiyGoyZiXnX7sje76VeA",
  "key25": "3j7Y5zZ6KB8hZ2863t6cnvn3Jm6ugABLyAZYG2fguJDk4RofSRGtfWEQvUtysfncJi2kW9gyx44xqUJ6PmFvkojk",
  "key26": "2JhwUiuiiwHxaNxrErx4fgTLRgwm5zrcMGZsFAs8fuUXzKzHBm6nXwGigTqmyjzou9B3eS1hbU8BVYh8xyYZhMNM",
  "key27": "4n9zdXcYGg7Bsjr2ZhZcknsGdrPLRkhM1dsZ7V6gzKNwknMmiGyZqZH1UL2V68FP6mhbNfkwesp5TGBijfXG5puH",
  "key28": "3E7PPZzDJC9hh28uRVCAhGmCMhiVGtuw4sRMYTkJfmKKyoJjdH3iVjMmT6BUPnMuWECbrr4HFqQprtcPQHrw5uMy",
  "key29": "4Ru8A7BQrgVb9j3prep2UqShQ68VBBUfjbWuSrA1Ups16x9rj3xYz8TxtVaXtS1yU66kfh1y7XmrVgg9LuhE7GMX",
  "key30": "2skvvAEyyERxwN46xM7DHpC3Jsuujxg8ku8eYCgi41BqoxnyKC4VEdEUDfZtzX2x9haWkuC43baK3dgEJFPUy5HT",
  "key31": "4f7iZFjWCH8iu8pyQmrSzpKo4QeUL4QFTpfKAyMmZxdsgt2w3DuYET3ccH7YCwBAAM2PRZZ3URGLB92tmcUEGKMH",
  "key32": "4iyFWGKkHCKgJjsRvivALNXdo88DfPwurCxXVWGHhvuowweDtLyY1MdyJCv9vPyEgSLeBVXb42oh34FRbHgid2L3",
  "key33": "ixokcvQYK8WvfaECFDh71Cr9JADn5M3Fe2UF33F322RS9BTz5oGbc8R1EfcvqmPMbtyMmeL2kG8TErk2rkjT757",
  "key34": "2WfbbYWMgHHSuAq2WHXd4kZCiA7GJEcTgZHo9aiZqwyMmsNamNizr9sv1X2ygGeGtKd9nrJqVgXyAkwUToiw8r6E",
  "key35": "44CnM3Cd4QwjufmYHVyoXNEmFf87MmDBFydz7dR873iBLDEjQuJMk9Mh5Q6d4dpF73PSAwou8jfLD4ubmoPTWffq",
  "key36": "1SkgEPc3QTxbLVYzRGdbrz43Xj36rXYwhxS6mHbdLG321y6j7RibvPZ9P93FjTJiF39ahKzY9kDoUP4vMvoiG6z",
  "key37": "3KPC4qrU9akTPV61EwXh7xhppvZe68pXvvRFDE5Y6RjsFo5nNFDemAQR7xnieJVaHUccA9dBFjDAdXqQwGUxwS9T",
  "key38": "juwQZdZYhDq265cjV1BPGJJmp955SiozttVdukmVcATjjVmyAw9xQp48EV9iqsCHqhYaiw1z3ka3brhhr6RiQRU",
  "key39": "2eucoSWwtsDEqJM5yaNHK9Wg5yAYkKfM2P9nwvgCWhy2YqAbjcMYYs8aLxTu6kL23JafEd2k2W7sDFda1DJs7pnw",
  "key40": "4VYv9KL1rkCkNyx1wKBwXRtdkdT1W6L9b1NUk4axe8fKk1SM74R1Gb9z4G1kGZzp9ETD89TZ1fMtcv4CrKWBgnZs",
  "key41": "3bae5YwPU9RwyoJGSof7GYwauKqAMfm2HPNK2bw4rt6W2eFSAKyo8x8JWcZ2sev3Sqg8HcDvE1Vu47928ihxhuBp",
  "key42": "4WJJAVEkP67PwagaTuR9xsRmud3bK2qnxPM7j2jqPwUeHvgv9UnzUDCRsy6oG1sh3bHEQzJhsoBTq4YBuhfhoPao",
  "key43": "WiFptTexBM7fncPiYiUmcNVLrzWUFXKxpcTaSZTWAdZ2AGSi4pt8UGNPytM6EWLwy87gubYMw22ShzosA7gNMx8",
  "key44": "sbg1GDkb2Ek28rE1QDNAcoL5Lo3Pd8Mi4ogm9Pa4Yir6b6i5jRdwLj8qzcsLuCoTYA9nD8HLHQyzzwsuSkfjfLT",
  "key45": "4cRPk4ENeQzNgmCXVfYxvWxAyoNeVnrAfVKtUnPoDge8zpACbuNQNeVh1K4fH8ffovb5SFFAJ7J3v8aJJzs1PhnX"
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
