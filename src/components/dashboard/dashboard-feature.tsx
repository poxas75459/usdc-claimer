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
    "JmaQkeAV9KvpvKvhA6pMzusBNnEUm7y69D1paSz6Bi56b7TdJgUGw2i2VoArvQh7fHuWeRUGSqLapgJdGqr2gAc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fPetw9g6hBNuELDCcSu9puWpbadEHrXGChkmF5dZNYKPXZWp5dyrGagnCfYzZMC2MY32fKH7mL3kKbVMnRwPWoM",
  "key1": "hWZiKVzM2ukNdVtgXBskFViXBuTKZP7x6ZsTiScTSFcLwyhWAhimiFVn65urqwLzWLFf1g5ipAteTCYwW4MGdbH",
  "key2": "3YiHrrhexi8u8vjVHrKBFJug9T8bYXBk29eGXWEzuXLwGnTqrWLx56gEBPm38p6Wu3u5JoCd6utj6UqG2BjoCdhZ",
  "key3": "2S8Q1Dd8USbhLm86xfwQCsLRxxwirQg8Ztw9cnqJdhk2D93DSQ3hr5QhHBkhVr9MumzDUEssZz1GMifWET6EDaT9",
  "key4": "3KZDXL96q7FeSx1cFgypxi7GfGTqYjEDAFRzhi88XNZBMpDi8gqRYHrrTGygDj5cKaESe9J22i9qY7V7izZq5a4n",
  "key5": "Zq7LPodt6iV6a4cGmujzsvuUKELo5U2qWW8S4g1LzSaep2ABrNf3Ty5qpJePQWTCFrtb763zuSyBvZEABsVSBvs",
  "key6": "61U4dtEDQrB8SDdkuhbXXeFqBZ1cjEWZG7YdfKNYRg1qQSCsH2TPivugDuGXM8ZaYFnaSHjbAqyz4zYNBLtVPU7o",
  "key7": "5Gomftzj5i4SGUEzQTFv7pS5s5VTXT6YGfi4kH24vyR2UVRCydEiugnkB435v4xntLPoYnY91Eea2LoWXD436YZm",
  "key8": "2mJPr6gpm9qtQAQddckWXfoAhcM4JXL9Mt4JSeEMPbpg55DMeK84PT24kqZPjhp5kjkunPabWaS2W1q9nvZ5wJKH",
  "key9": "Br5BJRZx5SMAxt3GE9b6itmyWmUvpvdqnfZsPLGMDrH4hZqmSjaeaAHRmpBWEdfdjFMVo4GCQMhCucx75KFZ2Hu",
  "key10": "5YM9pC583Q5zW3L8qJuAbqXWuV8sTPdjh92bQcsWghoKiACgNb2ZxbiB1CtP7WnfH7TxHVLwc8V5x1bRB5Fpopod",
  "key11": "2exRjpj5uwHt9JRRMiSofzsAEapP1qp82ywo93FaqnhtcXHFoX42au3maQZSVjx5DiSiHuFaLGefGQ73F2kzndmw",
  "key12": "Gezo2RQPVRcHgz7KyBBggBHk1U2DoaUwRkkSMbstd7CYdB5m5aFUjaehDe3RuQZkMh6KQ6FLq2kTkeKkvfwEFuz",
  "key13": "5TNHV2QRepKbEKDV5MUkoQgAcpdwr7W6M4avEzNuT2xxvnFREkuzc3au7Z9SCGdXwJVWCfpdEtNACnLNDqT3jdCg",
  "key14": "5bHKEJC24ExZthHAv42C1WemHFkGH35LfHWaKpTuWBtThkq2MkVZB9Fx9JTg7n7NUHpoLTHjCRc6WAvxyAw8FV2k",
  "key15": "ZLTLgam3XstRmKP79WLuK7Le3L7M6xNrktQFXtCBnt8cYbiU62henQCazfHPuLwgsyUuBRit9nDTqNTtKFEsowK",
  "key16": "5FPvSmgFYAZPGL3P3xDjKJ81TqY7aHrzzmZYfQVDztVNe2tN2vQEx4dBReWksRkqZe8Dy9dMnRCF662RfD1QFbap",
  "key17": "4YFhu7CqnUqmdEZg3DbpANxE6GozG9suX9WhJvzorHo8zQkCWjnJqwFEcUbf98ajkQECF896fNx5kvcerSRDbqKn",
  "key18": "5hWkJKaLyG9Vo1sE1St2VQVV2ffnb3LL1SF3jLG5m19C2wHvhw77YUemwwexdGeZja2F9Ea8gEwxbHtwMHRGyLK3",
  "key19": "45d96dRVM5boWcGYqCwCPGtaUaKYvnGyScvFrXLFhJGhcpw23UjLCE9PqkcKDBac2iSyjPdgxyLPjfL3t5nNGX81",
  "key20": "4cCqF6YbJukrkCG7G6QjanN69Ru7ntbTmoDDDN1kJV9p9YCxmqajLfH1YPCM8HBn5ZFhbL6DBBY6fUojDhg9MFL9",
  "key21": "5Tm5Ywi1nLU3dpjqympk1JWo7nnNN2kkHjV4iNF2YX5Rw9GEyWopCjviYb8FedXgBtmCm58hUzKhARk1JTrsih3n",
  "key22": "2FMcxpJn2Me84UoHP3CdCHMdPwWtvcJE6wK8saTnH1x2aP29msB3afXLDW8jgXfZ3EX6GN1SsyEUhsbHWtrLdtJn",
  "key23": "4bqvrAhLuD6qztGhTaYziHJ6fxJ6oX227xz5Ugqi914CSJmZqkfmTfc84iRFhpKRbd6c7fZdozCrBJyyQkbBJe4k",
  "key24": "3UeRaYEWu93bmTKydt77gHH822WU7V2y99Vmu9a2PkCc1v7CUdgeGKSymvXvztAtcgyLmDm7b3x16djWxkXuuN2r",
  "key25": "5HSeXNzmdTjHnRyxfP3BScjv8RzyoUSJuDgVP7AF6UKRQB9SBksg4eXUWwF5gQbjBd6M3bniKFVJMWV2pEPYqpB7",
  "key26": "5rN8mzsT62kge7LU2JszF2n6vqYG3YANf6xf2QBixKQT7GrcUCMEeyqyTR1boir2riYKZ3RCEJ8gJg6AvepjUce8",
  "key27": "pkBcFaDeyZCury8QzqTyGiYN4PdMzZqGJies1YyQYPDhQccWDLD4GD3mJCE6mcNxCVeoPKBXKG3RKWF1Jqezvvf",
  "key28": "5heHDc1epmKDbAppKz3q3815E8NG98nWheD8HAnU7cySvCzPkyo1LbAV6CjkgH2VGamC9iGnSfV3DaHg7rsjVtcQ",
  "key29": "2VezKcHVtYcitPgFwZn29LgfkXHYf8Xvni93rjV61zjdRb5Lot2gVNRMPnrSszXLFCEhqpm8kY2LWwahL9eNx3XE",
  "key30": "3SUX9B4yNu321WwMMNifmoumrMGFraQpmgeUbjamXtkFsamAYs678ZwCEc79KDz43mTo9HBGFowoMDSQCjVjZrA4",
  "key31": "37kYSkcD9CEG8xS9dATUzctw7Se9vCuHS7VJfrYPh54U52Ajggndu88b6BrKEidGTwSTt3bqVRcsNvNKm5pXENDg"
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
