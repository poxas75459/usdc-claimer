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
    "52Tjv2Khv7JSvkwP1AXNaSF42m8mNKN2BnQ5pRpSXoBTWWPKuPXkh7U2D3Xj5H5gaDnq81Fs56ZD8iaNz5eaUSRn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36rGes3rxakhFnBPEtR6pG7ECSiMWJLaN6yVJRwcpv7pna8ys4fkajNNNdCr2DdumqyKPBXKaGXFdTKd4K8BkpY4",
  "key1": "5zsqrHjaS5RfjWxNtvWpKsCj5HhPvjC9rWSoXteo6i3jyRMH3TG1JBbh5jsDWbea7GYMHcPdAx2moHExrbQKRryU",
  "key2": "4pMSy7o3L4ayf8FsyyViiimPTw5qJzq7g2jroBRQWmjMcEMVsgmPLo875ESUGAD9JmpAhhkwAnqLezAm1tKq1MZG",
  "key3": "3SDpSvDHzcuysLobe2cT1SM6tLpKRuEbdhLYMjoNZF7HxyJPuc6RhwUc9HmBVc16ZCNdNEvExaMMVDXcCyRtCcMU",
  "key4": "vtxAkybCZNpHLQ6jbHBxM4UBYbJPKeNs2qSfDEXo4yu1p5xAdw3NKR41xAjYWS7WEG4upynFN6YYYcqYVpwy2bu",
  "key5": "3EcSNDKvT7G8TPjJJRBMppiPHvQrFh2RMReQBV2pyNNPHXDvqPeXtDGotm2N5NJpUAwwei2PEgv1RgSxtAGUaanZ",
  "key6": "3Dr8qdyTLW6Y8hgnR1HsFjDkrmNujwC1tTv5r2FZgHytTvSwt1CdVBubRCP6QDWqSQjDVmYrdem7nhopLqfBbhv4",
  "key7": "SjtzxFiYrSd5vDWSU3esLEX97Vv5c5M7co8HP8WFCEbTeQRGf5t4E1ygQ5jZHFykDaS8GFt7wi6NZn7esfpFHde",
  "key8": "35fp1JhbeU3KkwxhW5tpRoAxNXNV6KiWPPk8hfHPPUxhEBV21YUuGQVYzF4USsMTSykpffa8qwwfogpWTRRtE8Ux",
  "key9": "4szA8PPAv2HDU9hUB3vztieqYSNefsYqu9eznq2585WD9yMbxxjtkx7swv5BAn7BptkgbJr1mSB5poCVFzP5Tpni",
  "key10": "5HqtXczYoJHgLBRejARngtwnDQfVGurt3EYL9mSmay1gLvyEXPjCHb1hDzbsqSCqfAjiMxosRQw3Bd1THdZqm4D4",
  "key11": "2e8Ruq92LWjSggpLzqD1GGMwdRgBcLejnxsL4ZPDZLz9e4ZUdZarUZJFdpyFCyGE8zP8x2LYUB3buZNaVPnxPMKU",
  "key12": "5Uqm9nh9Cufgv3qfVqxchp2NpYAKtgavGrP12c4nsUWpKpAf9br8hYKnobV1c2NiiaW4itTKSgSDuR3Lx47kme2y",
  "key13": "364xucyMh2W6y7W9QvbxS4TbDeeoisGAfW1o14jeU6yTtQC2WsHPJsr8eGySmBZD8WPoXg7RAuSr5X429pYxYN3g",
  "key14": "65kRcRF1Xco8S8po8rYmmgGtPeEib5q54ycxBM5HUbHXotPwN8ZuiS8VDLbSe7S2kXx5SwcfydHrLquhWGy5B4VT",
  "key15": "5HmkpkzUJw5DUN2bNQ3zLMVmgxSNcrcCnoyAGmCsGuFPtihtXpPbpWRWoBoFRTJM5eWePYkUTfQiqxvuESWXChVa",
  "key16": "2NFrytyNzmAc94Hwr5zm58hNaSbFWDzhMBZcHTUv9vt9RCcrwVcKgJ6kBj1qiMp8w9eBLyfFJtPZFTXvoFkdVWfa",
  "key17": "5hyPaqPE5PSrGt5bi3J93EMoMbJKMGqhehAMZAccFoANvbEksHg2AWuqyhWKxtfB1igTocESUANuprh5gAEjFdZP",
  "key18": "5Ggbbcx9RSEcMYjs9pEDh4YD4WZJcdLosJWVQVvn64C4inryFT3kCiQ4kcSxJGtK4BN7AoBknUkmkcj4ThjGXCDp",
  "key19": "2jaiJBnmYncbSfcSUxEJdnbgVas6iCyKP7FMddwuuuw8uJ6PhLaJEr2h18EF3PjdSjbxTTGumAdHfpANDhPcXXkU",
  "key20": "3xYuYdCvqSyckpFS495rAuXYzbRknRmG5d7oQPSVULiBweFr4yu2oJmSPJHCXfX1y7MSNTuPa25s8bpcK3biG5Kh",
  "key21": "3ubvovbySCdipp5VompM4hTRNqfdFQJg8FHPDWCY8s76oMixRNZx6nuFPfvCni2xeRU2mtoDEsopYjKD8RrBUF4b",
  "key22": "WrcuWyzwb1AGxPhge3hCLsCcXHudLQbrTE9RWFRcNhmTdSPnoHmhBue1Jf6pg2hhVV4DRYSzjBffFXDtSfPjvvU",
  "key23": "2JhGrqk8iiYjPvtiei9mM3dPwceGamt1hzhcHP7ooB4AtcCBf9PV2p2Tt6m8CtvzaWr7fTi2taCHgxX7qqhh4Y1V",
  "key24": "UrLhKfHhFPhPNG9xbGmcc6Ta3sWQpoWyveL1kD34FQjuPk2MNs961iHtLsebYYfzueGXs4qaNFgAj2t31V35nXE",
  "key25": "2n4JXk9sczUvfs8HrtjVhXuKfySAFPuaeMQxDiUYXghp3fm29YiMPbK75doo4spcxN9tckyCYcjn3nEzy18mfwiA",
  "key26": "27c58XfFpThxEqbsNTANtiYSbyLhA5TMTujEhKScistitEr3XH8NTi3FvYPMm8YFkhtHNgvv1STnuTtTDyuoV6mL",
  "key27": "nNt8bttPdT6RNAvua4cDGosgXXqt2xLqyEK5cvJrK8V39f82dCuhCiWyXWDcbvZnrzQenFVs4RiwNd6Rr8poHZw",
  "key28": "4kpuuPjRojFioivohZkREHfa6teMzwePn1yHdAFknqyTjvr8k35RSoS2wfBpVxVLyTCYvaJBHLRx1SEz67iF6aAQ",
  "key29": "581aSUzePDKZLPcVFWJH3FuHyeyPMMjsPm2WZmaa9aF8V8FTPm8WEDrcKdP5J7BHRhr1dUqZSiPN5WrNHPRfk2B3",
  "key30": "4uUKTDbmMs1SmSHJUe9Ta49MVNFr7hri62XLYmSGb399rFh2E2E8MBpJ677dwSatPBEFfUeUw2vDVBREPwjCVpGm",
  "key31": "mgHicxeqXf5KYV1k7APicMmFjDXwmpqQpqgzsCd4r43D7LhVC9TLeGa59wgK28Zinj3iNnBuNpQSiWnPF2466jB",
  "key32": "44B3XEVKrpAPuVrsbJte55TaDkRKpu9zgFNTwjbjw8NXfaD9iqpFVFmJabU7AetKxutpnD21ZNc2DS7Qkc3UEHXi",
  "key33": "vt1DyUWj1GFvSnyGVNtNBtEuPY7AXAFRXRocyFcawyworSKwxso77k1yKwf5bSsSxY7N2DPMCU8Bqtr1exWpgEd"
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
