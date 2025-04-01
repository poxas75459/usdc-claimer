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
    "2wSxhcDzeCDxu6aPLYUNjjcFukYHQUngdiLGUZEC1zf2oMEDRT1n9FiEL4vNSpbiPvyw2Q4hU9BLvqnkxDVeSS1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KfmeccS3t8Xqcz19HBqDFJqPj8bbnGwzubwBXGfGkY5NwVVV8B31yetRAruAJcaag5WRwW3DZxTZygB5gu4AtkD",
  "key1": "JgSCCAjcyPunL1yjhk7qsexeW4ajwpFYMbfY3n24MSbot2b2tVj16yFkfehavMKeS3ZrexdkHG2BEnshvcjvzWs",
  "key2": "4xch6AhQdca5R3WJo2MMT4jcks5odwsMaTAcDq7AA1cXYGktmWUR94NE2oA23T1eGxS1BF9XLXiPZLa61ETvLo1g",
  "key3": "4hKZQ8q9VMzCwgK51XCNpZU2ZJZPdd22wbEeTys3DCmdTpS46ZD2kGu3QSEZXoWUanJK49FYFU17SWBEBm2gynJV",
  "key4": "4JtqiekByQkuYJWz9gvrtUUQd3r6yucBHDcxxsgNJCegHtuonhNMnQah953NNQfTKw6ZoJnanFFBiY5YJkkGBkYN",
  "key5": "5BaF5JuAKxidme4N3ha2ZW9okFrByNoDWDw315ga2yvgaCh8yCaEzcMFFxLyBmxmAbLpow5HyPpYjKwefjN9NT4e",
  "key6": "wxs8uRQVvZu6DDjMFpFN16wNYVoMDy7CDiCy3NC9ja6Us8YPMBVYkDkW3Sx7evk4LU3TaeFjKFsUKQSWYM2P78x",
  "key7": "3z3TN64gGAqDu4MLVqndFC2k6JkeFJaV5rgW3G5A5Y39PKASUp9zG9HbgLhAKJppu7MoeZj88Rp4i8cmDtcba5J9",
  "key8": "4QuHV5SuGBj7ME8P6R31WUBfg8AE1Ah3TJnNNPyMh99ELmZMa7KC58NjMDfFGmYmZumApDk4mCP8Zrgb7MQynPu8",
  "key9": "5in1uY3JBRqAKqmZZGiViYbuH4xWsYr8cefT5e1iEDQvVtFpYaWeWAkUHjxDDLjJdp7xVQZYZ8n783ate3WLFwoD",
  "key10": "2CUDLkgNxVJxD6ay1U9B7Vsn3juP2mwkLSzcNeToegfo39msck1ovYRGGcSHWfarhXiYBDKmEbdhHsKL6kuGuc9J",
  "key11": "pQMeykAYkUTSKBV2RbAQjeMUUfFXNNXmCk7KAAETdm9uu5kR16G9gKzs7c1BL3Wu3KkNZPPttQGb9K2ugE2PShC",
  "key12": "5iyansfETb3FaYh13mMjWsu4iig6SBUNdnaey9U4NsbjMj94VAvzFM9LC9f8JCa1RzjMyR9LNH7JXAT2MJR1gBQS",
  "key13": "39SqHA2V6JHkNLghFhktZ5UTodrXcqMWyBAiyC9JaBs63vHSf7YgGMqfyR5AUQtKGPaJG5FuE6GWym3uPGQRpFY4",
  "key14": "5CiXY38Q78VUJetqUZHRPZjNYzxN2PaWhgmyzbCTPnM7hpUErDZiTwyS1mfTwWA5TqLDJx7oPMq8gYDibxNrESVx",
  "key15": "4puXrSJajQFxikGCezwo7PqB4MfceN6hViZeewB2z7e8ju5b4FdDAKJx8q3kkxz6axG2eGQR1ibCxfhKHpd1fHc1",
  "key16": "4zrTJDJL9NWmC39yJ3ZuZX6EtVmHiMa6NnDw5d8GtwpuucwKBA2bw7uohNsSEo52cgKfwzqgLc8PJqxyXv3F4rQu",
  "key17": "2AQYDHMKVp9LirydhXwPE1HyZKwcuJ1oh5iKr9Hd9MBtNTojDvwdxrxmjGorg7pRrVRVfxKVV7R7fiFVTaqHjPJu",
  "key18": "2Qzs8MPPemjtW6gpfkhhFcDasJncFDjsM7jtaSjmBZxzJnDsXVBzUrfjGG7jVoJ8bH2ZSMZkVxqfpEHt4HTMZdGu",
  "key19": "3ot1CHHg1zFcajaMSbhpjVntNTR2b1hXhXSsdPBZv1tk5xP3D94wnEpBqhKUCXUNpU3F8dryRe8WFhKfT3cJvTFD",
  "key20": "2JqLkmQ18C3N4kHU4jocYV8nqJpYvF2J5FB9yQrQUD2SKCouFpdK5G97Zg1qmYPuroVBmhSkhG3RVVAMeqb73TkL",
  "key21": "Me5W1hjZLprJg15jeM9qHSjThcTsNbVTq4DonJMMkEjEZS8guuQt5f7AjG3cufo5Yuh1qG3nRTv9hKnEFdLTiVK",
  "key22": "2M4osPUw2suM3aQCCKYTUEztjmsyxHG1kSg8R9VAPeQuQPXPuMoBd4biTUmPECfF9SCE2y8WgnuQ9gTHuuxtkGBW",
  "key23": "4dSQZ5fPUpKaUrTFfHNHd9KxvqB4usHM32G2LXY2vNPFjYjym5c1SJMTmBgqpvYAUoqPNNmuC9LdRUpFNxjQN3ty",
  "key24": "5hhsLUZe7pzxgh8hmpwhHUq5QkxMsa7BxcpS48BhAB9nnvJBXi5Hw6Pdg979bTNi7ddNsYvYBDwYVTZKAThcuTNq",
  "key25": "5LAxxxhi8XLav5ScLadRqULQTowN7Z6R4fSsi7GrLSpxHphoQkZDdtzTa4weRbWwYe7sRrX4H11cqfx1UVupT3AU",
  "key26": "5U9UtJ8JJfYjXXdWGM2jzRmCrYts6prpEX1e9S4PrKayaV7A3aWZWKJVjSDCLQ3gnc5YiciLr37d5zqLhtG3NUXU",
  "key27": "45HCkKFepnZDkMbVEQTDWQzTT4LMnrceSN6G94fSBQiUhPhjxJzMFmbQD7JYxSwX5gxxSWgSfMszoAoKGnuWNNHM",
  "key28": "4vLKaSdBZ2sxkXaQ3Hk1ipbKMGPfcfgaMGKmYUVpA3xsoLsWzk5BYNuifJ3NvJ5i6dkjS2d4HLi8UkS8ZLTqddqh",
  "key29": "5x4oUAB6jNCB7Mtp5Zp43uCAZWDrFAZH2uc5TmryB4YGG63oWRFTygZAUwpW5rQDyf8htFQ8NNSZPfqXD4SZyoMk",
  "key30": "3UdpzsLbCYuDQ3sLezQKVo3o9Cq5Jk4JYTwYQLFW9NBHohdYcdQHaXBJbWFxCjhtfM9m3BpqzhALAgvvad2xCzML",
  "key31": "3HFCukYNbvaM6bo3Xq1EdnaPZJaXpqiSChUDup5FVYeuMjSiuXYabep6czv2HJwJ3Z77k53y4r7azZ2H8tsevUPN",
  "key32": "2Mooc4RTTbjk44UHRuUVav8ijvCts7skatoLXH1PiRrx1FHEFpUWWRyJoduQdjGqf5stWitWftMehn88RqjzMdS3",
  "key33": "ceL8QDL5yLP9qFnNV5ZBug6guCApXpX4Ly7bMkJbznPhDJB9JGhPa8Tbjf28C1NPdcVFE5uCZeJaGXwr9E7MGzp",
  "key34": "2UwxdENcgRrtoSF4587UEszJkNXCNTvuxcxTM3vSc44paSs3Pq1CdvUHz9VMCUtWAPaGt4q3QrkmQUc85Rr7b5GC",
  "key35": "2GDdUcngmqgczcqrEFyfHxeqgrP11U6Kz2SbsQwSQ25VrGCuaYc26ysHW2VGenWUDhkMC9BCfG3w3m8GeFgpm9Ju",
  "key36": "3Y8eEJYaYsKfzSbYov3VUnabJBSnmKdg4r9Wx8iVDYqSx4kTk95HikD9VEjAg72HCqWAdGgXXukGA7Ab67xkvh7S",
  "key37": "DS3oxfr5vb36ga9xGiYNTQp1SuefPVraotJeoaU87K25Jmbg5ez4S88NBxsdCeCxJ4W9Aos6SUUWR62LdocfjWb",
  "key38": "5weQxKNS5vMMQpNhAsYBdphB4zvR4AnGcHoh1UFUa1cFycBHcF3Qzes8fT7UhNix6RxuTc9NC91AQS3h5FTytjkW",
  "key39": "RFX1JACf21qaY3TXk68H5ane9gMjDQ2yKVjMzzUz5QeYtcCUsD9iF2QTGKoLFhE7ZuRPq8PRkDszzntW7C95Hh1",
  "key40": "3fswsxBiYsqyBMbxDwxok7KvgCvX3dZmyYsPUADuHWfohBDNJN39wDsnTauexpwVDys2tx242aCMoG5SADpCrSLF",
  "key41": "3Hh8X24vDruxtBnU5LstFsSybWr3TXgoVUvxhN5C6DKXoeAvH3bbAdd6RxCdSJQ1mxi4qHAbsKrx9iNhoprk5q4v",
  "key42": "2TgmDm49Bpi61R4xbeJxwW6uV28tXV9VDkLE8wsFN1C6rAHSSnv5aGq3t6K5XQvRDyPReBRnH2ieuzsNVay4NtTs",
  "key43": "sF654rpsPpCH9jZeHCKm8xbNSWEqCg7sV1X6KEuBTTVJNLhHEW7Wo3KbmEoLJ9DFiAf1Ekgx8WY3cKexNErda9D",
  "key44": "45dyWMt7bgKhAtTvDHS88sVRhBzk7HXT53upiTayGLbvp9eNhiA7fhdMjWnHYNCT9JG1cGpSpG6peF9umwBeEF38",
  "key45": "4U8rkacjnEaGZazwMDXdATiR3v1wF7xdmAZvtUhQ3PdxyfUFrafX9nnVcUBu6xoXY7QYMfdEPhbGWCXZ5xDeu9Y1",
  "key46": "2jUeEe7ejsSp3DwtLC5wA1yDWUSdwrYmx6Paitr1sAUeW5e2TZE5cmsSSGAAVfdeqXRcsgoGWqJgWqM6UmQep5yL",
  "key47": "2QRUdzrD2xhP6chXTmCT1M5AxBoNDkX3rSVG8aEb4y6oAzX1pgvXgZsH5QZzpbU8aVJYxyUjEBe6wKCzCGF31tjy",
  "key48": "yUkQYzHTXoMhqJqfVV82PYi8vR7viT5nsHh2LE8w25fKLbM3FK1QWppnd3EczvPrfN5xFizYZRY6WwU3piqEemZ",
  "key49": "5fGxnpuJJsBVqgeVuzmzyZdvxffzLupLRn4tfyT6nZFh7gPFxp6ka9o6SmYY3ds7vPKKi2usANt4qz3SZHSi3hKm"
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
