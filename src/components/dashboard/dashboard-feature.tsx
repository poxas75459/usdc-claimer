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
    "2TUsM24VJLH2em1MH3tuoxUVaRQEwHXTkfDTwC4HRjuB1Cr13tiT83jQSfhqfwnJMp1wr2tJnfWtM62JpFdQaYHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHwXjR9rifEe8Xov8TXmXzASymk48BdvmpuXwpqSuPyHHXLvipiHLTLeMWVLRBVL8MUZTFDsv7xsQFjgkzeB4se",
  "key1": "5YJqiHWyrowpVz4bo4W5VQN81NPCv54q4yDHCFkuhcvN6rhpd7tWEZVVApDYwDKHnMT6xT3t77VRcb2x79Zux7R4",
  "key2": "48dJUT5GyjJsAF6BWz1VHauJX1jbpb25JaSNdYEXG1cAPSGudLu42T8VHpAx2nvMiC1spM68vKQQ2wkKV67QsRaX",
  "key3": "571hpZDenZDeGRj4gc75ZatF2RMab65DXAmUXQdcBhS9fvwZfv3rGh9jHtoQ6cDvozSEQpfeXBLg2GMs1aS6LJFj",
  "key4": "3gaTd8eLoCALDUS7qXz8ecPk71f7cLhTuiRtd2QWAC9z62VNv9sbujSAHMrmt3xU5PAKLPwD4amm7tpTjCz2ZTLT",
  "key5": "21ZjhVx6zZdj3iQav1n2t1A593x9VtzJNTGA3gg1nkjKNLk1owmYDAfsaimf5c4HRKRcDWp3Qr8yRARaHPna95HA",
  "key6": "4nE2aQ1oAMwwiQ18mHEx9SYsfjKG2W1ke5JH5NzFtkc2361NLG1ijRubgzsPtAgxXzsikpo8eMZ1QTAwdEpaQwFC",
  "key7": "23WAEMTwNaU4fY482UtXVssnAcXVYhzqJvpA26NCANjXpDdGAEhcg6XfABX9U1BpPaHc895MCWBivRoyTxM7nmv8",
  "key8": "5j2GzLWJoozDQ13k7gxjrA6bJpd3fZiVFXDiFdRViGGqvZiYBdpaaaLAYJhGjpFkNxBw757oVBYDQNoZdnSdFoEv",
  "key9": "3YSNZzt2Lf2mPzD9tmhjHec887o3AXQXbtnHH5i1xMKW27LWzG17veBgPw7MHQZs9t8VsYuApXTaBx44W8ShiQKr",
  "key10": "4kPE38vB8GJdikdkBDsFpmoqjd4f1TyHXmsZpCQao2LWQH2DCfuVqHSwcBgbg3Ai9Vgs1TmqrU3KJykyMaRkuk9S",
  "key11": "3JJqUrisXy174m1evb54ZVcJrbBHjycYkwfs7DGFWQ8tgLmTn48xrVN6Y4Sr4ovypm91Szmf4orBR5AKL1tYfJ7p",
  "key12": "jCatbZ31GohEP4FUova5oqfpKqwVUERpFyg82ap2wTeFnAxdRry9sRR9ZRzhw34SoQExoE6y8dVRsy5VhrvAEFM",
  "key13": "2A8pebGj1dhqQNaaWsctak5H2mNPnJ3uXrFuXof9Hwdu9N3UgDS8rBfrkasCuTSgT4pGoTZySdN9f8kWxNN52cFV",
  "key14": "4dYn326wZQyqys78veUzUytHipZT3DV9r8DWLScqXTMNhiBwb7vkuG7sKfXzLg5a9Q4fomr4bZde9maB9zur46d",
  "key15": "5bmKEq1DgrXc9KyZYkADS8xbncmK1oiyfYft5954umFFanZYnh3mXVvRPXp1vgkhM1BKEcwqgjuYUCBwzDDptV2o",
  "key16": "zBPUmSD5obTkKFs6xKKWPTmqp79xuLmXo3jBdjLeU7WH1szUDcV61cTtEypWWx4cnCA4Z2vabwUg4wPXZ5Y1aPU",
  "key17": "5DNb23KTdCGNWPfq2fuKqpGZHp541PipyTMBEScNvXFV59ppft7APYZisrLaHrSMXQpLoLJpY6FmDA7C147YMrhQ",
  "key18": "4RUoTufBFY4qH8X5H4PLVaHpS4EpgCouLPQESqr3ZVii3i5d9r7N39R2gfELuN65d5CPbLg6BM5uRD82tA9akigP",
  "key19": "w1nmYFeyJx3xiVsXaPvYAgojGdRhuAyBeuY5CWiQg1y4xuTK9mCdJVUFoAoG9cEvDyeY3t1JzBcsADV3ESMmhdc",
  "key20": "2SrCsZoRaPCZ7vKL1kgLqyfJ6bbV52L8zMP8nT7RFXbQDDHhVK71azDqQk2TEGrajEvzHBDF6Lufbw85cGAxN4sz",
  "key21": "5ckQDCVkNdbqNxa4pRVq1VtAn7bStMr5P6ocwZYpNdSqAxgfqmSPZubUWCKRMLqNA1sYyMBpVQbzh6rxtfA2p815",
  "key22": "4zxxstgYSRd6mbqB3V2m2RfV6FDT5QUbB1BnQ5VGPfv3kQPnPbxKTSusHCAmeS8RytdDNAF4neDq22b7ixjH4hLP",
  "key23": "3KrG8L1tKEhjtzmK3s4sPEDxUhReRFHcSUGiMcArr7iBpUMJ8bhrh4UkpXWi3q3wUArJFF8XPWffpyadQDPD7fJa",
  "key24": "44HUWHbwKJonZ2ET9FAYDTN23ibZEvX6ELXboPTA4PuY9oKxJ3oaSfzZT63NWmunUpBe6UBtaT7NCf38QgWdt2FQ",
  "key25": "2FbXkWPJQ1fEsFxAbCFTTu2ysHvoyWwHwMcGcPtkQK6cg1EoAuuQUiCUM8uFCpWHg1r1VrqWTAyJrkMpJKaqqjba",
  "key26": "4Vv8etn5DkjDAkxpW6SbBSqYv4phvkkMJQh2436GuCAW1z1a3oAkwPwEppv4PMYPL9viU6mziYnFj3P4Lx1Ryy6a",
  "key27": "EJARGBcBFJwx7iE9i5vuZbyGdBeZgG7FemYTtwohQY52QX7YkuuBj1VTfWxEnCGJQpWRjpSBdjUKu42R4aepmv4",
  "key28": "3dtoCLi9mtdbrYPRfGMeXfbRfacTm16b9sJzy1p8cUy2wUc5VLcFzEvATtPjmx3XRVkX5V3jNTe5X1FoZuk5XJFC",
  "key29": "43w2sGk8AAYNNjdyhhLthvTpKCmUqu9bzHVsyFaATu7TCXWDZWxKk4Naq7QPZoEVuyz4G72aAcDJXBrSeRkFw4T8",
  "key30": "4X1TdxkpHpDLu4KLnCRdxU2LLsKsh42sBvxaM8oA1bW9xAAMVAYarfGaRPpPbzrepv38RBmJUBKfCAn5TmvFAjCb",
  "key31": "2E72XjrigeP96H9Vk1HDtJRA4v8cCFkXLTMEzRdiT61Jp6Qg8aSFVFWLnPdsBwC8EiBDoAugNyfML2FY6V1qpZwK",
  "key32": "3dj5bSNhmHAsQmaou59qAyyo1vcxJgWw9gWma8NkPaiXhEwghULQZTp4hkzx5EwjBzoYu8uQ3JipygSwipjc3iLX",
  "key33": "4LPrmm7X2rCbS3o3evzKUBcycf3coPuVSV9kNCQhRkDM5fVFAqyDYCbJMmoC5gdUA6pKGJ12ZeUPvSVcGWMaiu5M",
  "key34": "4CzKwr6er9RoGtyxPd57A8kw2pM9UjRfw3W8MuoEbkBZSUgzaSAp7a25QdVzXjHj4LHwNJvvnbepSJTHwGyXrG1Y"
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
