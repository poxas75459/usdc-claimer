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
    "4qsRCRhBGYMB5ZTpTYbqbVcJPPdzniX6xd1Eft4f6BmNi3FCtqGZwpGNcfBUHzdpcxcMBSgvxX1gFe5Y64BcAmNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QXu5ukLjc5GGuNunHjD7LVmjfJKmxaj6jFMXpYrpQgKwn96BtQMe33zk95QXgzqPSPP1Bw5CeZUtV4WjkMyY6UY",
  "key1": "5ZFNAbS3XCNShWDqSq3t3rgWfurUwWNrkpgjHkvTUTJ8a3Sk2DeG74kSrtCXKRVzN8NUUgCiupRNTBSc9uaup9LZ",
  "key2": "2BHkRJrQ4wiFaoQdWV4q3GfZhjaimf374CtaMUcnZHzBtPu389zLuRehj1wYEK4D6dd3cCuGctuV1J3WEkjQr9g1",
  "key3": "3ASx4YWimKMgJVpgw2EVG8zfbPuwzw7nz1zR1sRcfekW5oeJaxyQgCU4uTnaaq2wRsncr7qcp65irKKJ9y1ZkzvF",
  "key4": "3b3jFAX527xqBtXa9maaux42QEVro5waW5szRNKnNe7tAbMVKV5bXqjjoyYwfNpsRFNU5wXmhg4vkAa5ErDhbmW6",
  "key5": "3EpUQtaEyJq4jjZEarv8fvFpS6uSfmPkjbonmfJJZf9rZBFx9bN53nJjmy8gy4XB3mAtNaEJzbBRr5Vcr8rw5Eu5",
  "key6": "2BfQmrhwravK4jFxynV18fzj8GehV5WD9mRKDZxGrX2Mn6Qs7whtyQhaK2dp2b2JVCtfQYkYdcKAeWME78c8GqmM",
  "key7": "3ZuzDVPdP61jgdXhBk47zawKVBPtu9STAw7u1zw7yA6KbHDKaSM2enCQuyCfCM6gyDNDDDG7kEFofMYfcnBfNeCg",
  "key8": "4Di7kD35enXJ4DBiAeLARS7EnAtxRFfcyKXQzDRTqKtnpdh88fDsVysQ25xaqMzRRdyxUbrFQnpMecxMWqbQbsp2",
  "key9": "2iiysJwU7GSEZBF4zmaszy6wqJFz5CpP4ntQYt1g2CRk2z9fCac2muuAds3mQrU8RzYHSG3t2MS6jBdTjZxrE9h",
  "key10": "2KnDuNqa3etYmj3DC58VDpx5yFRyUqrhkMM2tzZSAP5EbUaS1aZBJCXZFA6ugctztqgDpVMSHo4N4VMc2EnHvZvD",
  "key11": "5hVhXHTh7PYrLpfa6mcHE6p8GwtfVg5L4xdv35VADonx5p3ePS4YPKB6njuEjXSZqAmTE27iHgRFANvtr4nD5Nvy",
  "key12": "mRViVmMNETmS7LvkPcGxWso49ikkW6Pbdd9r4e6mqTUoMgbtRGWkEE33AsvM77be8ma7Wzn8izmTPzK1NMnfJjX",
  "key13": "bV8TgZG4NB11TgwpANX9QmcJKA8DjzucwoznLdUoR8dnk5NJLqMkwWTB2VFpHQHzVZe3Gp9kEAq4UjYgPwD2QSw",
  "key14": "5TvxhAvqbRL1VkzqCpdXCX6tm5aLgai3gxSQhbWnFAJ8u7YdGrpkCLAH3zfrbSunLMyv76geJLcYWv1Qxzt2ipeQ",
  "key15": "5ooexx36HLZxkiEnKE6RpPLtmAFuh5ubYdF9YJfMUveRkyBpQE1xwJPMjXpivRxpWJFC9gjxYts7Xj3FnCm7wdhM",
  "key16": "4FMAwLADxucW1ggDmeuE52xZ42YQnbk3dhpBFBcrAcAEVhh2FAvruL5pb9hCsz36gFFogzTEsThiLR3ua6vCRmTs",
  "key17": "4CW6HZqpwrS3qRhRP4aMEKCGddnck1CrU829zqFhiqcmP4NNomDfKXAuysazzpXassf2EwkmaoUGVhd1zcgonsyb",
  "key18": "4mAkzGJchvcjpU3gjFxsMzT6Z5HwmVw9Cc1ttXw5MH1241ajkACUPMj8VQCzKj8WeGtKSbxGRTPThXuU11JE3T7",
  "key19": "5iUF67u7FwFcki8xVeq4H7rvC98dLTmBZ1cca9BSKzYpDEcp99uxHiXvE3KvQagg2ynm9ppGfbX86w4MQa73Sdes",
  "key20": "3ytDV17qAoxRD7tEgkva8BriaC3Lgz8iYb2TuTs8c1PyU8SK3cHoibAN9hb4iJTiU2WMM4a1hAXNC1keHtDnWjzN",
  "key21": "2xvet6Y8Lyuh3HNCjYXMDfC88J4de59YP4CQuwGQrCuCSo2orFYLxtWQnmoEiQpEPNuXssxBh9ZwD5sy7amJBCTv",
  "key22": "41qa9wEe4aMBjmxo7mEG45dXkx6AH8oL739ok1GMAa5m9wtqLkfKzQjZMczC5iERTDPNehH6kogZ7rFZNUa21VtJ",
  "key23": "Ubue4U3yrcd6uJiaG8MeiFB3SDs9aj3p8aqewHrcHuN15EmCLojxgFEfQpKn2LGCzmSdryfZpM7RTicFikRGeC3",
  "key24": "u7A5ejG5PSwWUjwvmGRirpSwbT8f5Kj2MMTXQFTftNgko4cnisyypCvuH99ZcF4pH9e5VbrgmuKG7XZvwqppAUP",
  "key25": "4HvxTKgd3mVcEVWGDzBmk6oSW6H2Ts41y7KBy3hu12knsAn3eJDgS2g4Zeh29YCRd354k28JfyF2k7gMcRKAxwxp",
  "key26": "4UbFoc5C56xPUkWRBcLiiqkH6HEbeUNVbNymH2ooyypthpMLLiLko3TFA8KubikZ2g6bp9sP4v6gwtEBFBnXn8ed",
  "key27": "3eTbNsNv3bbXaooHKBbNQtutJsQbjFqUG51YYEGRr2nMVodUv1JUMxXnhk1G5rhY9xdctEV81fmYZt4WYYcBpr2q",
  "key28": "3W8HV8P5trBvfLzEE5wbZjShu9H4DmDrY9ULJvDMCcdJgobBwWc6VYstpoy8MhQmX3ryrRM3zbEesM7JBeX9titZ",
  "key29": "4XHfu4ENRW7F76C71z9LQt2wJP3ZJ3VyofeYM2vvmwckx56mvoMm1fSePaTjhzuwMRXCPLyHFqXcQjnE3gVCRpaw",
  "key30": "5rkfL4eEfixc3E2rqTJNasJEAWEFWurKoz8LNKRrSTDpXS8tDFBPuSwDEYF9tC1W3AKGXcrNZqrF5s6oXHsVw3GR",
  "key31": "2S6JvbHxMNfHsTezJbo5KB1UttCqkpDZgiSUVwzHZPBvYMCrh1SSk6DxLohZYN5tqZTNvV5Xu6P7kPydNmJwkvmu",
  "key32": "2NM5JczqhW8wLeWPZ5MxbtTb4JRPusSh6bafuADS5JrpDbRsKhAUfQ3mrrLWkFSy3ksnYNHfULA3p9CNzoJ3LvD7",
  "key33": "3BQWExNLFt3bA5v97dRFLC1FuSuJyvQMipMJQ7n9DqAiLhAgfyWdSokFPCEcfDRrffqir9xtbqTMxMFppEp4kAZW",
  "key34": "3hrYYCqRCpzNxvRYz8jp7gU14DiuuyAzDqSi8DJY1RuStC9zcKYKVGjSd5PxFzbK4NmRPUU65ht6o4HG31bMhX2p",
  "key35": "2S9UBg858bk13N5wvcsiWLiTiNxuuQvLpUxpJYEZv3xAdKASp1JJgtvgJ9dmxMNNh228sXUoL2NR2FD6aBvgYARC",
  "key36": "41Uhta9GQa1UfRSzBGcshHoSGNg3jqky4wpbzGjt1fNRov9YaWCaWrQAwyBJsr6dMFKjxSGrvFfhyjgQ9y9UD1Gb",
  "key37": "b9CToCBVvWpHYAJHqr7gdJ7te1UXvEz7gisuikrSv9gpybLXBFfNf5LexBCc1QV762aFJJVcG4RTiw9xEnz8TK5"
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
