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
    "2wVTgu8fzns3ToWmh8UGVRQ1PWGLFTHKMpsbxSkgDzLFeUV5tfoSZVMXGtAwFSgdpMAsZUC6rQhtqjVWZcb1txWT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4txK2Q6RHjjzRqCyNxi7MHSFYx98hvmcUUNtdTHFtaYKbt44Z7Ge46qgfwtibRVLtf9x5mhXqGUUwuSSjfjAqcGy",
  "key1": "46iUD9Z3K9tzekiJg7n5WfzQgBmXmN4XP4hrZAYSjtTGM19a2XY8xM7X6x67xE2eaqpJpA89i9ui5H5wWbGZKmWQ",
  "key2": "3k6vYEFJqVcscs5TnppzXNLJvv9zgMGxdK4hb4jyTcWvtJAiKFyWno9CJZQ7ozVTbJShwn5yWu8a7UiMgXTP5prb",
  "key3": "5AcfK7MZMDvmMEhZVhnsG5PZf8xiAie9G4wvGemmBvWvzNZCHoVB83CDcYBiQRagKXo4bgHqfA6vfgCWzd7xHCj3",
  "key4": "3g43xNThvGGZTDQvzvkcM4cN5yuoycoJbvqquaPToXAoHS19dTgvwfTmxsz1ec7nqUcEe1TNFjGkoBSjamc5Su8j",
  "key5": "34UuGNN8HjHkDeb72AQRn8mBDkUfh98W6s8WXrVACeLW7anYHCgmEebsCEX8c4dLynxF86XEq9cNp4bAkh4YdRSU",
  "key6": "4BJ4bWNLxytmBjASvSdvGp893EUc7puJdCLELuhjhfUgrZ4UPKz25eZRgUy1X1m6ZybmDJVcj3xHGDjQXPdg4HNR",
  "key7": "4ahqSV3ukka4BLjUm1Nh3nRfDwA1S3wnFqgdHuVfW5EQMZmYM1uS559tKeqoUQbGA5x4R1fNPvtEQnjKGsxidpux",
  "key8": "5WWkCpGUiVfZx75Pkpbnnuzfr8mfQM3rfmkmNTz54eeVXUkBX8DBcLsWNUienoSFQ3p6WkGq3A9QfGCxAzMXU1Xd",
  "key9": "4PUxoWZyJXWhePgENbpvQXsU3iLocVHtnkJ8zQ64XusoJLZ5qFJGchfZQSkgCh6DAWaR6vkZUi6kE2QSwmaTzUhU",
  "key10": "4EtvnEXfatk4nFjg438h2iemrhzXNyZDcNVo5NnPHDJzmYHZ3jYBQP1DL8JNY4sQBQiGq91zvA8XpFLtpzSPVzDv",
  "key11": "2wEBUjXXXyPHsVatiDNb2LGk3ksg3XmY36HXu5nsaZK1fcC4qT2kUmTRFzMypjWGpzhD7Ar3C1Zyn8WaQXx1vGXy",
  "key12": "mBEK2aXk1J1LFct7MmQmxs1uvGTKBCXuUkqFs4MeXQtEvyXPLJbQeXeVU1Gh2yJZfcWKrPHTvYcjGXEUAaVmgao",
  "key13": "631meExP13g9BYS4VawAPUPpDqJEkjJB4QUSKQH1qsZTSyJnKk3VcSGjBJF3wq2BykZiuoyCvW66tGMFDHkGrjnb",
  "key14": "3URfmFbPZ4Ge8XDs1ZD1aoGH4ePoQVTag9uCmDKfFDQiBd3dB7QJZn7bjfUTTzjqaKWUz3xQoqviyw4TGVGXaS3",
  "key15": "4V8iLeL7ZA5cBnK4T2NN1c9NJEq6gMZHRH9HtXdDKdML8b51bE326afLp6eKRSZvaCtzR6pk5K5oR8DjL3a4SVQ",
  "key16": "4LcPtFgH6LqZEhLLPoDVEWmqjfCtCbDUECKNnQTta1g9HimfXVX4NQrMrT45wofih2gi8zGeFz2rcmXDJ1VWL8Zu",
  "key17": "q1ZGFwrXyagLZVKHGRCteSA9NJSFdVUsPJpyGGDPN3iBbAR8K7w8t7eSh2agzBYi7NgCKPUUa3Auia7zRSwyAYo",
  "key18": "5W2L2ny5nwsHusfQFE79hCr62ckVqmFGP79MCTiKtmsE4RNXc2jg9JzoM3m3Y75T1EzKLCdyUWL1yggL6GopKCmH",
  "key19": "3D1xXkZx76vQJ2oVVJPcoRdozxujb9RSHNRQLy1tWPPhubCsNEnr7UVNjQku1quQqPDSkemoRyXpyjzevN4tcE9n",
  "key20": "2WXaoDTgVoWsrqyrVhzXJpWU6DSxpEqDeYgKWv2qngq7WCJ9DXMa6JR4QTMgZjBer3hVS2Xs2EioWVBzUzatVFtx",
  "key21": "2mEvq2HbtLiJyYy9qViCRvxU2rEtkudvtTkSwUigUFBAxvjyVstYVZVMoSbtEzM4TtC9jCx4Ry9m23J2C7hWkqBV",
  "key22": "5R8HWEzFPcQXQc3TksKP8P6kruSKUNZzyTfuq7LQw4sLYHxwBHkgJ31hMpwaw8vWu1fAiptCAgx8reBXQpbjnuPp",
  "key23": "4jX43RkMm4twZHzQmTVj6VQqnGbv6BgxzvZDW2i38S9RqGsGbiS9nrx6KZCyZAE6zEUFhv1iP2YYPSKmyeG9mZC",
  "key24": "2Pg3LzP1UbNWf9k2hVBVvLFUJ1AD5P7e7MUdw7EgvFrbmbZZfnWt4N2rwhLCWrNTFDiEbtj4LB4uL5xX1a7Xkic7",
  "key25": "4pb2qXj4awkte3xWjhb7ciZttArdvxvZK7asRRfzterbbX6DN2QcX8pV4bYAhx3nUVmBEhm6nxARY5ZT98c26H7T",
  "key26": "4YMD6ta2Zf2tmvhsCmHzP85XrLqYj4wjCqiAd4m2W2YhLtiN64BjQishfo7rUCukNN8b94AxHC5P8JXKx4JFP8eL",
  "key27": "349ynz6czCmxBKG6RCxJsvHtP8Tt1kiW1ftWiCK5k8vhUUNLw4eVYjVxixxDpWjC7yyQABgipNuAndv8F2k69KTC",
  "key28": "2Jcc78MSezG36kxQXsNggP77p1EC4dg7zqghfUT5AazN4MbaGwfbyyQE3kjxjUDiwUZShE5WvPr38F8oj3HmHsJA",
  "key29": "2fbC493ozZpfJhJwrUyirX5HhWSvAy3QpzWL8M1nBxHBPwDmNeF4NzpW7U14x7U4pCfjbwwBKKBKrgJVGPTbjzYE",
  "key30": "5iFAEPZHSYtdwUe29AgG1qHFccr67CueHFVoMHrxBv67TjuRKr4tcdEtPv3knYc5WawVrhPu9hLgnNk2yLukcWJD",
  "key31": "4M5z8BKZtx83otG7BsfdTomTrEC84WwH5uRJA4amj1z9giB6vb7r5CdEXo7tu2PAhMpf71rgfZYjFnGe1C4Bd5Zy",
  "key32": "3g9YduGNwPnF6cVkKc2rRicMF6Se4XGkyrd2seZr7gnsLbQZTkbfCAeaVumKafCrew4Go4HQeELm9jeHBW36eRxy",
  "key33": "4wD2xcHAS4c5u9ijjWLcLuMCFNtPduQdGFH4Sp6SCNLN9PgyTqk6xvyXrMWNrCiML1o6MeVnjP3iw2rP9zVUTuZh",
  "key34": "2TCMezcQPQ5NodqbTWLAAX3jgTvCq6gDEx3xghynb7NBYP4vLZB1NKjNtEznEbmFERtKroXr3gZy4YmkbQoKXL3n",
  "key35": "5cAXm9LWoRyCWrbcffih3cUUZHiUggUo9k1jtFQgSeBCF8rsVdonsFR7PLDvT6qt3UQRP7T7KZPQRQxnL6GV8WEr",
  "key36": "WSiR7ssxMjb3h4u6VPAVAUgaUTrVc4xoizFbGYD4STbxhEfyfLPKz5VRAVgydfsJzWnFnB4AUWe2hEejnDNwQBH",
  "key37": "3FKk7P63Hkz4q2wvjMUnaws4hdUrUX39xFDqwGkMMis7r7vWVYM415PqkMYSHp17FhS6HqnCetSoHydubqqMUGe",
  "key38": "WbTs7Hva8Mot9e2NnyXus1Pfxq72BRGMLNh4dMJuUjUpEP5eU2yMtsbGeJhyFXYMCU2vwB3dKKqYwLZaMYfeXqm",
  "key39": "4N8s6HHnxFTWgh677iiv56Yjv99raEQ5urvNzjBJWh3h6ZLFEUHRK8e34UFon2CZMvGiEADnubzcBmBXuo6hhfrj",
  "key40": "Wh6JZemjYfAvnjdNq9m6a2MoffvhoaqHYdFxschYs8PXpX4gjTnqEsw6QnLGAxhP9dm7bmb7sknjimDQF9baBev",
  "key41": "ayd6e51BzKmZdFfg2v4efjTQuFmCh3vhsfBDZN21zDV3yCPc5Fp8jSzquUXdfHorVbsSmaxYvpd3piFCDnG1iYd",
  "key42": "vFmC5kTVJCvfTZK1P4TWBzc9aBnmxBco5noVKdxhwzivaAaxKb9371JKrwWim3QGRsmb8Xd4bkNDLsQ6ekTuwZT",
  "key43": "5WvskviVYAg3uxLKZnBe7NvZvAAVGahhuREdLgRmuTzRrGxRDUG95ozfAexPo26Vx2z1Ct3hmsEbk3GiYwekvqdC",
  "key44": "3YpiLTA3jvfecDKCFM61DyYPPYKgN9oPa3TKe2km4Y5UCeSyQTxZ9pZoHKKzkcRBC5hXdY67e35gPkyEsoZLqrzo",
  "key45": "4cL8bDkatPH49SRJxoyNSEYKMyEXXwAkapWJyGTfUkPnpXi2vAzgs9fEZSZpxTbBmJ6mhoAL2RFtscVN9EDRP78m",
  "key46": "5nvZjHij94MBZCSce7kqtzVbnULwRpWfahuBpK8U7CkM5TcKskY59Apt18puHEhMvXVnaSF2moNACaf6U78w21ct",
  "key47": "2gotAU98WXAXJ2HZHxHpU5KobStbcCakuGd37JgST56yk8nb3EfyvQ9QzgRhM37E6rXKQHP7sBoBUq5oJVhcn8kh",
  "key48": "5QNoQiFtHx2jTytVjiPaXXqFVpiQ9Gg2ebgX7FE6uYCfHkQGgPwEPjLo2TGi16dDZ9wgqQLxsD7SVuMk8G5BNatg"
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
