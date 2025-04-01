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
    "2zYHTTiS8Ai9ikQuAC8a6gN1AjEfHLwePJEdPt8wUwGL745dnHFnXPG6pdKjKrcSD75GG57S3Atx4h8fWuQpZTBF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vc53rzebsUmRvrWKVvzmXzmCEUHJMAbMzdP2BXAb5fQCGRUTHaxtoJG42Dv4cHaHomA2LeYdAhmJFYgVC51W1Pp",
  "key1": "RS66tNMinjH9BkULHek28ZKCKQCjrA428f2XakurXvum2P8xoWv8HEmeDPgFWvEvyM3xBTaHqPe3kACR4RZZ13v",
  "key2": "vpA93eBamnUB3SU4WyxA944NJjj7sXKm2Aa59KQunp2D1vJf2EKVBvqAXXeczvybdMVQbbSgQS5qS5Gh39V9ZNW",
  "key3": "4qkJDsPNmsG8muoEx7WNs4oNVRB3BQioXf7PF43W9zDUusPboW5UXPAJmK7FcsRtTHWbxiBLi33uznbjGoR88hEX",
  "key4": "4TvJAthAqfJwpsYis93oEYoc6RPYZPYBjWVonLKTaA16fVZ6wtQsVdYhfsHmBHTydS3UgxB6W4UpVLrjfyZiCJsv",
  "key5": "33A7gxdz5RjBjfiu8BcmNGWVBiZMDXVDraN1Hg7cgEHMGjjBn35jYcoBCrkJsVYkCa5Ltr9FrV1Uvx9JFw7iHrST",
  "key6": "4wt2wh1ymAjqxYKve4ZPPrQn839PZjSuyjRzJzkTtM3qbectj3Ey6CiMKevCJvpRqwgSq8xGKoqsJLi7Wte7bhi",
  "key7": "5vrh5R4peA1zNTZNDdfGHshHE17pjv2tEcbRzpBpL8Ctecs4z2qKTLtcThvPGdHvVwpsNrY6jHaCtbBUrAxY8uDu",
  "key8": "2JeWbkg6WuTBJA389jUkNjoTQQsLgKRmUD42GE4QXP6HJXiHJwP1mMp5dqHPCeJAkKWNY9UBNeAT7ujTB397jFRr",
  "key9": "4oKU1ymrvsBb2hNK8KaNUvrz2AFxg27tqN2eVTzF11j6Gw6fzvJDeDPtg7jTXMkDC1t8C5Nh7bn5Dsf9EDAfMFRE",
  "key10": "QD7MUoa4YtM8UusMxMp1FTDAP1WRBSEqc5wCFwV1oPfysJtgcf1hV2gAJKMsv2D2LUc7bdXyD3pHdLFK8PQWPus",
  "key11": "sCYYQreZq5mLEqqanxFKkFRN3937myWh47zzsXuK4cd3uhpfdzVWiHuWq5oQxoBf9kBdkwCy7yfuL4LNHcFZKde",
  "key12": "3tSGtBt2kvq6CCHQvPg9qMoQ6A9fDXf6R9NLcaAdNGd6bvZZ33sVbCfurQhpSyAAmGXCnXXTbksHZL8c7YbS28qD",
  "key13": "4v4rcqjgE5uf1ei2HCaWdd1oQB67gofPzQJKj9qvwdF5eCY58GZG4UNkoY9Z8N3qpwYftM9ry6N6pHEe6ANQcYv3",
  "key14": "3dJkeKuQ4BZLrQK4TkWCTMbPEUBye6tBdCyR4Tt5unRqThpKc91Sm4nEbv2XnixBgFU3btyYz5SDGdU7SbS9at1X",
  "key15": "612X8QG245zTXNPUcPSvpJGwnTnCuoXqjeidTCMvqV9VDAGQqonpTmGNn7ZhKvhJjWq2QfEEQkjiw1MMDZKXp2G7",
  "key16": "2CkRuz4ywHyVee7gEKjXN36RATzuy98FdqvhAyGKtME3axNbnEtWvvzu9LtkTTBZ81DFBEz2p8ef2xoTfd1W9suz",
  "key17": "4Hw834Lqf9dsmG9A96vvfYN4AZttHw5DEGxLz1sVrGgDJrPr4Zyq6e8ki8X1CxZgRHvDxZxsDuqn5rUHBh287DJu",
  "key18": "2oHFqwdFsdmk1QvFiY6Zwx4drzbzjvcFE3wgMHctXsJ9aUhLYpNvjxQ35fYKpzzd9WZgmybkMSSGzrdseauqhVN8",
  "key19": "4J5DMQbvFPmzGaXq52AUSEXQwzYpQ2jgbT9AsMrDGbVHSgTo2rJigsWU1S64WzSmqXiy3MA1WCoptkS6aqaLjDEc",
  "key20": "529LPqwGYYAK5o7PV7wfmRV9AB3nrAe79KdjQAZp15wBpbzjSM6xR4uJRw66QPVSF5pbdeRZeZRda29wejR8EbCy",
  "key21": "53wE2pRG6wdRQtSWfMJwNwiBbZNx9ZJuxWJg9USMR2HrxhAFxcDAU73T1NFme767bghdDyMAWiG4f4TCykfNWPrZ",
  "key22": "YVhWLYVhJaazbemMDVo6tu8bwP2W5mjZ2ebCMQLbtpRSdPHzKhgpURqc2KRuNBXJg9d6nG6TP88hYs9pduZbN4x",
  "key23": "52RrSJKGpvW1yhuVsgrazKHCptAntecpn9mdtmnmEyfgykiuA4SSkw86TgBTdWRsEiiU4m4HiaWJg82DTA5WmGm9",
  "key24": "56rB1osiG8C8DhJtxvWufP7o9SQHMyMC4i15MncwYC1WZ8fdfQAaXus3drVkZTXyMPtiomDHgKCGj9VndVoUDQR",
  "key25": "5X1Mcb8sXnc6jsdrueeEnMT48vuNbQJCNTgsaC6kwkrYftycrydqG657pkE9SaYfpsiCf3atPqob4zWFYhjNmB4T",
  "key26": "5YXrtAGsC5VzzaFZg9PVKisX8sMvc3mFJaH5yeAFh3Sz4tiYTmoYB1aV5nMK4iffytGn4Fz7gZRnt6y6utZ668Mh",
  "key27": "5x2AKQpcnexmMJYYPadvosJJAgJ1R7ZBZxw2eBNcZckXWTaTJ3QZVJ6wRiU83yRT4WjNX5mYZwJ1q1XhCY8xknMq",
  "key28": "5HnkP6HynRj4tY3mbMtu2Nwx6oXv9RZ6KNspTrVkkGs2PbP3KGVki7aLEqZ1AMPZYd6ru2QZMvUMWxYN18sPtpod",
  "key29": "4J9Hh3HLwaAX4MsEnPNxeQem1mntgUNz8BQ4pBuX5vuMS5RVwL3kGw1SNxKY4N4LJLyAQ4S7EChRh1BgMDGALvbz",
  "key30": "5LFVVXRUxjQvUzMvF9yRJ9fExpMiqk6RKim6hukB2MCtjjdXVLpGc84pqv2NE1m4VrBXALbVNpofVdRPFUFdcHQv",
  "key31": "2P7xPdvkYk22NrkyaU3hQ3SCbba9AQgsihY8p8kwVAKXMhLCW7eEZvEDsdgwEnkLtHB9y5xPFE5Z7kEi4MBewRn5",
  "key32": "4fNj3jVPBG1tQVDxJGDb5RUCR5AGZjP5fGoeNAu8MebS8v8Ggk4NxJD46V1ioYpyaRwFRmiTnbxhycVoj2WwLPHy",
  "key33": "2mnxYaJamufGfFvbTTtjbFtGn8CcC97aMzvZLUkuogdLwSXberVQXQkSRdr4UMtmw9X6nVuiCecdHk8SqrNfUQB",
  "key34": "2qbnDAFVFCAXQZ13QjkfppiqR4nxSETjWeLATaMbevyd7FEDKEr4gYu2hXi4PHebJfYEbWQ6tSmdg7G3jwaCJx8d",
  "key35": "59QVccmCuwFX6upswcvzCJdDJb9EQikZbX7fAFbuEKN8Zebo7CqvwAiQnNnjKdaTHrkUMMMvHvSz8Sz297n5RcMf",
  "key36": "2Z9jrKLAr386yfeMuUB5yAdbJD2XK1tGPQSucKG8zaiAADHejGYCF9iWsxU4okYZMx1K3xG8uC1dqMfgvJcBTeSB",
  "key37": "5JcrLgYGniNiLudrstzbdYHiPM4QXTYv3Xg5EGwr2UmE5yhZiib4wJcQhCdFxoj8KDUFQPJUfEJe9Fo66cLwTW5A",
  "key38": "4vBHkyBiFnzZK4yjkoXzkqCjpHvX8rm641dJdBKqBt5hNanzaJiyhc73RiRnbzP6fJ9ndLWnCp1Veq9sGrbJnHBo",
  "key39": "Z4fpEwRhwHUUq7GgWtvg3BqeqAoDoHHXDHDTegxxmkHFaSmGQHuJ5mNZfGPLJFFcbfiKtLqxz87HCQdmsfH6acf",
  "key40": "331mt4QNTgb41meQ91kAvf5tKNfPYXXzfLL7QcySsTQgoCeWzVAcjEEHVrGvQVwk7vdHEoSegn8GJPTkPgJEpNfR",
  "key41": "5gW2cZoccDETiYTftu8ZeFAZLv2XLHYG31WJX6GAEgFRJQ1n3i8HJ18eiD1Ph6DtUuvFEqqeMqrW6A4pH6zNYnKT",
  "key42": "21SK5t1xjLgJ2zY9Wri5gKUh4Trohot4VHMgkYvB7Lsii5JVuy8cgy1QfJa83EFrZrRsyuLN4xnPUTu2P83dPpoL",
  "key43": "56dXwdBPaqGpyWbphkvJ9WsPg9BzW2jC69mPPpDRWuPC7gRJgUR572H3jPZ5VNySpkFskRiPqdUZCwNcNcKJzNSE",
  "key44": "59tPTtV7p4h27pYDDH2Ku67wycoBiAobT6ypbH2CCLJrcnKdZUCVK5BmpovnvrD5fN7e5bXT9VkLvovG7dkJYmLr",
  "key45": "4ABvcqbXwYDccrPs5A5GGo2ffL95MKqDminewTCwb5bGsghiq7nivLvbthGeRtFeGGMDifPoCW49GZoWpQWa2b5M",
  "key46": "2rUB3rmyo8wLFBE1Vo1jzxZUCo9qGp5KFAoT2o8G6cmJ63jNEuVbgKhg13NUXDSXvWCRJfNgeNkAQnPDrAWgH5P2",
  "key47": "2VMnNsZYfDBmsXYhDYCCGrVfbSk6aXG9S2hrS5XDwabnkErBmbDDZYfNimyjbE1FqmXgURtUsDjuaQ7nbYH7uANj",
  "key48": "2katUmi6NgtqQqBaDCee5seREhRgWURACbrLPWRTYQGFLoNE3nuuNCb9VYXZ7peAVVhFsLT3pLcgzDLaT84dwFVc"
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
