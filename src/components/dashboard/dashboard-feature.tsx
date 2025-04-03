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
    "5wpV3cYBDtd4Dx7prk13tJf1BTBHhYdxYepU3SxbsfNTE19jtVZ7d73WjW7Tv4UDFK9pDb6vrnFz8UoV5vKhoHYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cGHKTnCmFDfeUk8csxaHaSBv3DPeCFfupBiLBfpdA2Fid3FraGUcCV9mvEdefdiSo1dF7DgxTrUKt5gyQjeBSqn",
  "key1": "AUTVTnWErwyGQz7RYkjduhfrYD4m2XZxy488EacedLTCvHcPuPWNgwnGsxbwYyK1grHNH34tjgdV8X1eS554yQy",
  "key2": "3tvYKeytaW1naGD1oieSXYEaCBhxUcbwLGM2aDQTim2LnpHL9FUFKjrX2NqJS5tRjELUSEVfvnzjAcdyWtRM6B1a",
  "key3": "5fCem3d6wjocBFp4mjvokeFntcepSfLsSDzZAMRJsPop9LuaYVojPVFbYhryegMLNf65oqt2iW995SQw2ERx22cV",
  "key4": "62eaatHPZNVg78CSgEAYWYNx9Pm3Wu4e4fHMyPCTFKxxft9bSSvHNbbEuLC8BAyujSw4EWArrLASQFY8eFbrnriH",
  "key5": "5Uin6PdLRuqEaQJVK3HGh2t2qSEyPGtL6KVZBik99uALHqC5DSatboNbioB4ptHwpPuTDDnfXigSyV8Z3X8xDQU8",
  "key6": "58hQ6UDhmBYHzQAeAbtF29sVSNiX9vfgGtwMjfV1vZCBcxSgdX3BhggU7vQPgTDzx3hMdn8EDYau4MLe8tNLcJLE",
  "key7": "599gnACTdDaJSLNyi3475JubqCEvN6vxKztthgZxqPScb41F5XAwDAtSUG8bQaeABS7eBZPTi9bC95X8VfEpkaSM",
  "key8": "2EyhdZ5hM6aEL1ErPdzNginxyYuwK3EZkdPNoY9hibfmARH7vnhom1H5ASmtSZ37eckfNvyYHdaJXwMHtKaxM1aq",
  "key9": "3AUtswe4CAKeJjyJGmnt6Bb1nMV7GcdxgsiedqNk9PD64eXn7vmwZZB7RV1SqwW8uJyMuG4M64QA26yrt9LY1ido",
  "key10": "5z6QtPPXrpg9Zmx43nzbbH58Pxgd4PxX9bebYGWjuvdMqPJeCSMgkSb8cgjow8LxLe5MgEtNdNkuhCMuu6Lfyz4w",
  "key11": "4cedpfn6jDCwSzY5iFE66bK1wQKYi2ZXzBMjg99ynDsrvK7MfKgc1Xi72F48gkiUKWEy82Ezc6HwKHEk6ApStcCb",
  "key12": "4iA9seR2FEESSzv2dbvMQbhJVNZoZ715NwVXQq4rYVCeE91wkw6aCULPyrSp18PtFCzeJhdvid5JamkXYadfr893",
  "key13": "61S53BH5jckXvj2zkPPaRccxnBnAvcH66p6piUQjxtf1orvC41YVvpisdF1uygmBXtZR9YVD848G3JrSLfEx1hZ4",
  "key14": "5dvTKwWVTVjH4mSyPKX1QDxoJFcPiDruRBfu8jmRhxiMGDNYQMHTWvrH6FMzZV5ec91anK37F2z6nhZ3y7BcspdD",
  "key15": "enu2Wkfp1zndqoNvfx3ZiMUbiULkfbw3EP1e2xH2aYQRMJM7y6RGr7KrW4uR7W1m5t2AFopBRPFb5DHYGmvfYuh",
  "key16": "2W6EB3oyVPprpYbXXLGG1XysDvEMhf63t9KyumcM91LocmC9Bb24nBVYidGpHWceXxtoDSnu68pBz9Yg6PqeB3xT",
  "key17": "xd2V2erXpTk1FihjfpBtGLeK2SUyUpkh8E3bMLxVvLf7qpPTzMU3NeaYti4XBgxx6B8VhAHgsgfgVJ75B8otvwk",
  "key18": "31qGo3AHRhyGfbfQRvcheHtdjdNkBfasycPt6YUxF1xxc5NF3mgUjgSCRmN15td41295GiM4CUYSsrmM8j6AUPgM",
  "key19": "5GVnQHtk4jPxKJnpFtR97Zfhs77G3UEdFtnALTG7RtUXqgvCVLJ2Bvxk9dKCkuTmBsmL8Wa8kMo3xfp6qrfHMHhh",
  "key20": "2psimipHgR1wMmNaJWm7jmUD6mVxBA7Jg4aHMTVKno62GgxMTy7feSUxm9zLZm7oDTN22oEwe3AtL5hkg8qZL9th",
  "key21": "48wHWrTy6SCLvX1TGzkyYs8gdvojGKrHuVFC6D86H59hxRbwNQnEmxGRcQqupfLhb4MMyQU2QjcjmyLvUCzN7HPu",
  "key22": "3zdbb1Gv2JFdDUFcZwKC33XC2qa6QL9FPoF4B5xUcEuCJ6uWeM3ENuykgWesH41X38Q2X2w7qc1gb3syimRRUFDm",
  "key23": "5Dy29P79ZpCyjhCaxPNx3UKbxELcsoBKRtRTVsbsXUHWBTGG4cP46zdQe2KZUup7YgfnqiNrw3gB3RKv89JTLhfG",
  "key24": "44Dx755rpUR5HFMAzmAEMWVqN9Heypn75gayZqzwbVHYt5HHDcsjWKd69BRzXubU5ehtV48QihPJ6kTQfuvdgu9H",
  "key25": "3oSZ76ejJofT1rk5WaPwwj1UMCffhe7Tg3wmcwz8tBLGT8ZXbyzxeNRRXfr2cLrjk6zDZj1x9F7ntjP8HFkVagMA",
  "key26": "EKmmQJDTffE1tDcKnmqVsQwktaa18dNxWCpufmpMuGxHaJnc9u4wcsM1qkoQGXXvL6QbFYULYQPUbY5J5Gp9f73",
  "key27": "67jY3VtGBdRT586UaLspmj9KA5mCS5vDSt5ARVoEHbAuzdak7pK5Ce7a5BNsDbM6a7x4rJjRaXk3uyy9tEEVMYGb",
  "key28": "TRnKNwQShXRCf9Qf2rcaiT4Gqan2um87fAFLcfX3CiRSaMHc2zuCnThZpaVVZ2NSvkWeB7YEeZCcFLnrUXYjuH8",
  "key29": "5vJUEs3i5QCdRS4sXigBfYEt53YQ6J7UpdD2zh8KtgcYw35ATKbQ1z2B5y1EzjdcPsdW7RKD8hgKK6FVqsLDwbgo",
  "key30": "47b9hoyuoz87tkwrGcnKtwKNBJD9MQ5QXLTZ8ZR9TPyiRwLF35t2be1XkieeRfy6o75WWAh2QVUuFoon73GMGo1q",
  "key31": "yQQNGfzbfzyhMejDmgWUQtXP4q9dMfVqxDBiz5uhFEowT3Q4zZk1ziAaL9n7doDdfQ1VikT5xCwfRuxSXjQAyyQ",
  "key32": "LemJaFafXYqZAbXnN3KVLGPFi45H7oW1E24JUhrtH1GowWirjpTdJUnSqzsH38JfujVoyc7z5Pjj8tUBhpXkaqo",
  "key33": "VSHKgrtvZ2jdSnvTfXiYQx6EFc4gbYhihXmpakjLQEKdP2qEcgxkt4gYkXop5r6BQEn2KYSdXQo7EbRUpmunsDC",
  "key34": "3RD5xiPavpLV1Z2NUpfCAVyH2Q5Gd9BW8E2eZqmsGBy64Bs2DnUuYiiCTsX5SDo2KqqA1HvDB4DjQ2sp7JgvqtGK",
  "key35": "u2CNkJMWdTKR9dSEdzszaqBGrCnoQMNyx551vERo1ZTc48xRT7ojfbTyiao2tH3QuBUCkEYT4GewrbxxFfG37kM",
  "key36": "44PCieMndTiwzTHzJNk2Bwum6cMZiZHhqMnc4oewRPiqSUTL9wm6mgccTFc3Xs3NVNa8dn1YStwpEcZeqRrSrzFj",
  "key37": "5N79tPQLGTaGAkgLTC2wyze9fsBgknZV56JHbR4RBTLvt25VVcazE75WTQDM67WqqoLZT6WgyJdzsrJsVLrhK1U4",
  "key38": "2K82hZfXHdQuorvDkBUCtv3DcUAHxY4P5doqNgsnUMRbw8iiGAseFXtW7akQVANsC33e2fjmDTLWRMFg7V49Vawb",
  "key39": "s2wSQxB8DQAnEzsDMx2g876DwMJzXwqaNMgJdKDcfRmxU21c4ErrXy9obSwwkAWWBHt2ark1EPSX2cvfdiM8F1A",
  "key40": "2KbiwdeHfAH1nfXRM37TD6kxQhB1EDL3BAFomkGjgjTEAAUUeLWsHJG8bWA7a6h6EiVLHNtvWuLh11CNc6nXFz7r",
  "key41": "55K1EDdEWznc1VVjK1Lu6oe829GtAvrHQvgLbXjkEnWiXqnd8ACuf9854svK6cWR52SqbMVp1nFzs5ozQtZhRkLW"
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
