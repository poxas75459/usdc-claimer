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
    "5G1UTQCgNi8kLrY7ogWgkgW6hmgYwYWw7Xpnzk6N8u31BoDkZ974aoBHtd7dBHqbCC595JJkWBTk2mZFJxUHnUff"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44QPBU9ntUGa374fMLZbRCeyLC88SQQCHvGFMFgkPNEfLDiMPAoQQ6TXTPMYRW5ZApkomxWFMH1Q9qLbBa1vbNuX",
  "key1": "3gSKzVwQLRmQS6RmyKZ3W6AcgKWRZsMUNRmnZFDCpVxsD8EWKui8Yckh547FocN8LT9yNYrgEUXJComTBEp56Up4",
  "key2": "5B5QZPAUzCfA8NmrYo3e3D4enB7ZHWBeqeJ2WiCnj8P2z8BJmCatuXGDi87NPDajXeA5zgahAzPqCmnvWV2WLvKw",
  "key3": "2hkFbk6o5CxPDAdZWjk4Y4JxACBrc8nvRcdhVMNFaqGpykAqRds89PLWv1n6HXzCZ4vG26YdS9JsTvdyjpycgqfU",
  "key4": "2mvTo8qJJ3ft1Ae2CzhJeLcGHQagGBoUNThbfHrnuxnNE9Yv7HuaifyE5EPhdJdoLQnRNt7g3FB6aHsQdi88CopR",
  "key5": "2KYP5Jisc9TrAXA6tbEWgFhobZHst9rxrE3TupGY7Hd4vctviM5jfwGRzvqFKM9EzHQwjMqfVP8aRFD2WF2Yies8",
  "key6": "3vnfWdJ1D7MbmdHvVhrNnCrYWtdtKQd9Z2GsfxeGxXxd8chnrApHj4UyKtYGR78m8RVe4BaYVKNnWfSpGfMW4qX6",
  "key7": "4vPP1ooG4gHoXD6Jv1NgSQFeZb98pjWXES5kxqp7t5Yre3dFMoRrNrbf9pocWx25TnRnE5KwqMu1EDZRhGk7KvL4",
  "key8": "3pdTDE7sGM4ESCwvDm4NpLxKWgHRyj1c3Dy6ShaHsiE1nnd7yCJTkoiEnDinY1jiaZmDSNXHw6Rco7ryXtAKfmFt",
  "key9": "2kdsagBAG6AnfseH5e7AjDro61bqXRCTQht1bfVueoGrHVwyznPtyALbJSr21bTbAqnPzS1u5P9cEyRtFojDu9pq",
  "key10": "5h2Mb67kfKGBhqSvEP1fNWca8QdXcFUPem6xonHaeBoRQ7r6ZtgzLSuG7k9fQ7g9Sn8zYjwm6byRNGa3pm1wniWR",
  "key11": "3ALd3vHN897e9h7pVrpLXJ8Mvv1p5myYMnmWdgkE1q5G4WWuoE5zdgfe9VDSnjuMGree8QDGUYZDNVwbDRRq7q7d",
  "key12": "2zkMnZKraGL6iMqjs8sTpCGZ1c1SDwpD7VPvDpyi4HFcJmVLFNXeSqeCWUT6bAgphmxYDECzi8t9iWFBARA5iCQ9",
  "key13": "46uUVDy57efb6LdizkWuemniBTCxcjM3WNM7HKfBQ1NLesy6zA3q732FsEnKPzeyAhtGqQsQqxWajPpBv6xiYCsA",
  "key14": "4Go3PrvLMVaqEfYAdWfLn5XGRDwyi3WXba4H7WtDBaVMSrSvqoGseDnhHAuK3txqgrEuXxmsiFp1YWgs8YTFmy2J",
  "key15": "5HyhyRLELgbyhPWWxjk7rRACsrMNbQrzTVVwG6TbArfWpdBei83QMFMc7v5c3CwyoRYLPxfb5xngvrDNRjBBd5vY",
  "key16": "w2svueB2rKQcisj1bd2LwPChsWsqpsee44ui4YofArWWW9L3R6HjyjvWPYbm3ufiJmijdoMHbWaYXBiTwUnsxCe",
  "key17": "3rbxPgyPMnmbiTBEReFFGdM1vpipN1UTn82GAd7Wd9wzfbBSo5fwcV54xPrsMDPSFkbo7jpTRhpfekhy1CscSMor",
  "key18": "3KS34BSujBD4zd4TwQRJ5V1KRDsXxj32ucnnRNrDSPPvRvqw9MpCGsixp8N95pupvmRgETCqbkTo1vQQN5XBHRSJ",
  "key19": "39HCCLKaAUyywASPioRgcUagfjK8twsfEnraceZMLJmR3aAmpmdp8DA4zXXZ4sb3jdXZFRGsLjxpyMytE7DoanCV",
  "key20": "22fpzrx2SZhYyDimU8nzdMGwH1LNSgPAzqyM9q4u1b9WB6iNRCs7r4ni9Ec18SsDzc7qvoM4x8pLrUPinfvnHm7G",
  "key21": "3opS4CB2ThYX18jSLjoW3u3Z1CVDR8yX4pgNk7gFm5gjQqJqoF6hPygNGAkZ8kj4931s7xPKCSXpiv4SZQihCZ1n",
  "key22": "U4b2kEFA2i33nMyahFZboY53MNXBb4gtitPaUzdnEov8rU8SiRGLhJxhUDantkcxqscmSb5VYbCVJ25rXeRELJJ",
  "key23": "9bZs1FWzse8dR7Gkarpz2ptBTof29zySnw5JFAr2YDbhskJGZn8YKEsUuRRYJLMrWHBmRAYQNQZqpcNGyJpqoiP",
  "key24": "3QooLuLTtGEkpCuDtBZksepYDLHkRnp6Q7AsmJ4bgcVPXCT98PoDfAvRViQtBcZVBEqsYE2cvLpr9x9E1NLDobuE",
  "key25": "255EKtYy4Yk7zu2f6QyeHeeYme9nuhDuRwKJ32wWNUgSa7hGfbwhkxHCCWXq2zEFuXA2MxwvEZwgbi4BD8waaa1i",
  "key26": "3YXwxx4ge4EH6KqXXJgHBwB4YApDtSyWA3h42KcJQ4BnLaR5Z24WmEybFmPHLkJfjecJQrnteGHGiz8dBxRVTVRS",
  "key27": "28HFCptjGTMnRraiunkxp9q2JuNUvh3jH3ckGSD6Ekydir5RSDifFuaSuVw3LxKyesvn7oKXCNfk77ERxj4n8HWN",
  "key28": "vzjQ2QC1g3jLk651VGBuZCgc4QTFBayqEu3o866jpUXSzwdDkuXrzUKPJBSkAzB9sSE11NH5RmaC9AYZmoLoa63",
  "key29": "jPsEYqj5HbPEtthk5pBRDjjmLAZSxGrPD9cfZRyp1Tzw2Qo4CgqZZjHBQcAwbDQYzNDQqf4uuvoP2cPJSuxWW3N",
  "key30": "4fAZVqxeZRXKH9Mn6bVhPynMjuNwzf42ZwDCEVDdqeipCrXGkEpZAupGFi54i27mbAGzz5ip2PqwKmoGv3KjDoKk",
  "key31": "5yKQUqq4Aff1RY4NdoM9QFh3H8fRa4LNQGAEBJvQoFWCqka47UsMTmeF3qjPNQxgE6CnZoReUA6oXT817VBNxrE8",
  "key32": "3AYd4DU3bVjnNo9DkZgzscMEbPiSmr7DyXAxBuT4ig5c1THnXx1ur6J7Cc4geUkYwx2Ft475X3R4bGNMSp38G5gC",
  "key33": "4pEoxJyoeSG6kYW9L2DdUKXpSwnqJK9CrthL798CBvnJC7hfjF78vHLDqBZDgzyUfUaZaJz2zatjUUz7FHYePffy",
  "key34": "3XSqSDmxEMNsJ6mynXtc74vF9d7LaN3quaF6xJdYeaHq1BmQuTbMctSnbugj14LtQdzvb9WeZxCjNMhmJZBw1AC2",
  "key35": "NNxYTkRjSSkRENsv1zSbTFzF5HqFJKoaAogSCnTLhrygoX51ZE6Um3tb9qm423aP1CGSWQ4yxUijrk4Sc4YCYXs",
  "key36": "2f6pFKB3PP9avqVtenCUDCPaJascvNUGrRW89WXDYWhLqb7stymgsVBRQBxAmdgAC4dMkB9AJVtzUKBaf9fQ3idi",
  "key37": "5s1qmv2p7zxf73DFhDqTJ5BLgKsRajSG6muBmVi7CR2NJieNfh5sp5SUsNh7KMDcAEJFc767k53aro33NRURfagQ",
  "key38": "3MTwfXsMJcFjB9L1Gi1BvPo7gGkdGKPL7gfEfXWxBED84UpXN6PzXipT848Pk17zgEvGpdqdZseZ4Ak52eWcHmSd",
  "key39": "2Ht5F6RL3Uho2MjCbfuXcUeQx3kyzi5TCExMesgJztwosykLTUYHYW7hunKKU5rwMJpWCUTzmaau6ogeVR7QYgAv",
  "key40": "5eTxajDQ7ESAwUY7H5u38wxHMPvoxfwTK8rB1M52S1WyQZcMHXAoFxUqNcZFySnvTNq9dBwiCfVBRuj9M75Fp5LP",
  "key41": "3f54TJCnPMTtrTNAvxzYhB6Yc416ofJBxWB9WcioFMxSHxwNDgvCzH4k3uskLG6fKEbM1uwoixhX9kTUJKTQ71Xo",
  "key42": "5WymUBaqm8P2dzxLqdsXuy6hgsc6xpRVpcd1rm8xd66JeW8rZEXtim4Sww79MeXSmSUyKmGDAfEVKBzQg5oZtULw"
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
