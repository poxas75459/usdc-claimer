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
    "2j5uEtdT6fXNLPQnL5WdFVAzDARVCQahUPqtLudekorRZfw3kLqBpkcthYeEuMa1R9ZEp4pRupKZxpPwTubBDD3d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jRfjM2A68obzwEBPyoKwhaHYGQFarpxcxQ5nMRU9hGjiudS5A7D2GKCrXeq8D43QbX8EMnoEfGSBZ2cG2MT7LmZ",
  "key1": "4idWhV3D8saGisVeo4vvFntcpDL51kLBiMy4o7WXEsKmNu9V529nuAgaReo5kBUJNpnF7MRvq4Qn65rCVHnFAnKx",
  "key2": "2WtxBUnQMNUpAvEFuHFPi6jsH1VJT7U1eLkH2DzQYRTDau3MLnikUxwFXC8epxtbcwCRYaCiv4GfzN1mQ8dcmCnM",
  "key3": "4Qo4b7ktSieHgwJGRpXJjTasmPzH8bUtJvf39GNnKXDC1GsAfLtPY1AqatEXiepaTL93PiBaWkeYkiDefeREBLfT",
  "key4": "3PjDG5nFf8sfiP81jqVo4chonK7fuHoKZNcDCDc5tWEsocgV8ia7LsHDprnDnMMuyhnT4FsKPpGiDiBzfJnQYHxW",
  "key5": "3KrrzJZBcj4cj5SG1mKMThT5LBwW5VgQuS8fAoc16Kdb1LEovGTK2RjeWPhgtd9PAEVvu1GUpyUbeG9DaSJdCan9",
  "key6": "5C8TerjxvkybTirvkTqrw3J5S4D2728SNR5SRA5Z2ira28wephb2czpJFdr4zBF6Tbm6JLLfmWBAa43vydsicYUR",
  "key7": "3WeabVJRZwp7KSmG7pZZaPewYoUNXFuSEdAcbb8WKQpzvSm6WhjLbFYYpZ1E3hnZ6RzGpqF1vthYFRj7fx2DLGmZ",
  "key8": "Bs1E89cuRGV2vB26c49sQUAxf3crFGtdKEWkq5x6fFHJtoWpT14pnmh88XB59oSXkvNx3BFWm6hNW6ZchZADEQH",
  "key9": "4YjYmUtGPdB3ihPMBUJC15V4vs1jrCRRgib18u2ZdNH7gZhRTKYks1amncWa5qEP5wUs35dNyj9fejDxcdDayzSW",
  "key10": "3PBu5bjKPVNiXSwLPeaiC4frFR4rswSUsj6USBnxsVGsrGtsge3JVnJy6DKCEr2p8gthZWnrBRXCLVvCX2GWWCqu",
  "key11": "4hptquRASBdq28yfi9jd9YzFFNh8riuVdFmfLAMwnt22hQSShUEdNgBfVwsa7J3LZDjXBNsKT8LMwb1MbDmidWAH",
  "key12": "Vuzje6t25BECBoCWPgQssxXNss8Upqs4qhBmcxHxL8SJN8NTd2vXuNo4hnC3ov36GisHNVsCBEszvPHpoYEtLo8",
  "key13": "NmnoSW5ztU4ypqGoeReuUyMn63CovsHnpTseh8j6c65nasjayGs8TogUZzPA4RcmgUsQHhpoV4LVqEsYC5PLeAa",
  "key14": "3E1S5piJeUm5eoBLKoGgMgBWjxnxei4K8uKXHj1Rtfjx2guwy5LYSCoT2H5kWmNTRSWiJK1eQ8pNiJWqjnjUPrDY",
  "key15": "4hgNx6uvtDSKYXFcnpo1ChN5byz56XRMsBYCaVEP36GGnW9QJX49uuxmLCXhxqgxdf8iYcjbPSEkTjvcNGALmjfB",
  "key16": "5nxVYZmNXpehX6b5md1QEY3y4ngdQjSUhQiXQth33NcMeLDLpzT8jBC4F3vpeq2VqwC88V5BEgUtvRGJaYx38bKq",
  "key17": "5ihpE2VLfAn4CkNwZB6aaFLwhAjoEL6rZYTSY1Eu8mcsNfTWPJcTyE1zyTUX4XYzEYTXTf5kzjpaW4eRbmk7SV6h",
  "key18": "qzyW42RMbesgT8EoTP7x8wnVTgihM8Q4vSdzrU9GJ2LPAummiaxtbSYX6SQ2EYmw5sbKwsjp6ioj1gPviu69K21",
  "key19": "4fkfGgsxkzJRSVXZg5qWxpRdBECiggpUk4hoLdNib6tArXpL11dcwkWk2XcB2CnpxFXeWvFSaRxkgcKhA2ubYk8h",
  "key20": "3U7BT1wwFKbNHSFTLUchcvdLUJE34ZB64LDqPMRB8Zk1RXKKuHAZ17pW38CqmhEp65bAfPHmpoJY377RTHQ7T3uC",
  "key21": "22ypKxkabCsXtaybWN66NFiVYAuaiHJo52JvWY95EEiRrU8tn3bjk66m6rf9sZQSVuTpo86yHjX4mgEycVfquogj",
  "key22": "3eUsYrXXAKDdtLACSZ46FCywM2EoLhRo8VDCfF9CFuoVHyR8kNdboSiz9FbAXcH3k4c4NSjXqiDKDamyMpNr9TbV",
  "key23": "m8L2YhWBGB2smAXFcArqrLmVsq35mPcnKXfbJauEMGRh79SpfsNdfJ3ydMJeuTsxi4ZJU7qzSkiFSXkHf39aor6",
  "key24": "4qbc98UAgMSHbUFiTogqqFkCvSR1sr1woMCEUpAjYdbztntgV2EV94yfKvhyUYadu19Cg6zs5m8pkTrFbnb7mZMq",
  "key25": "nXRZDhEGJxcverYJvwSdafU2ToJ8MxfGV6jejgtkJQs6UraNdpyDmeitaub3Q898fJ6Xi1auh5NFARihDcjDSBw",
  "key26": "5ZkVAwU6mS1xad6QgmmoHBL35i68hTmwdgQeHx3QJDFfjMUCKySE6VwokzFm1sHfLxnuLChg1AiPyN4ycUFopXVF",
  "key27": "4r5Fj3Uqo9gGrgqohApUyBDVFicgcvWmZbmZCfNzaFvcuffmXFrjG5zRG7ShWvDP5D6XRj22jeLPAwqEVTy6KHe",
  "key28": "38uciLZPtmbtxvNXw534MZmi66CEbfXpQKZUaJbH1TLhhARP5j6tabAWa27Kyqqe5aqQF4WSvDDoj143XQgAAoEs",
  "key29": "4hQxJoo4GqDCr6RyUZVncJ2xqm2isMuHz1iW8VnQF2wHWRg3JX8m8ahtNjCCGXsaLbTaeN2Dr6jgzUMTSUPbDcmn",
  "key30": "67WoydbwQ56n4YARPyZD8zWMz6hTY9EKx4XNrDY6LYoB6oyyPaAz98uuVQ6yPeeBp6iLSPTMGxXf6HnEerKQ4ocH",
  "key31": "3CatiFRQBi58fkPJpegk414yBdrDDh23Q142w6PvjJtiM7zAZYVJf2agByzU4zUQ9hvELdgsLyZQu4eHhhRHB8Cg",
  "key32": "XsiNJyoXFqQCod7VL84qUFYkqaCbBZ5twtoQ5PpUQytw3jzuF2APRki79bA2YVEoCXhaGYfLfop1g7Nq2sDQpsj",
  "key33": "fiaJxKPBFN1cL5cbGLgjkVhQDhQibEomjAgXjP92zb9S42r8oYDawRzMqAZfSzbwYe7pxh2ZYprJPApGwuY2ZPg",
  "key34": "NMK9wWzdhz5dCsaSZCAPztoko1V3Mqa96E7o1HSUQGZT9TwTSGibyJzbUYfHYhdawrAUTTnUqj65StYSVvSbrQY",
  "key35": "5sSwAgnKTatkXVNZXXTUU15ad37SJcEajx8E3WXcvS5xhc5ujdLfLC4vx24Z7hfiXAQNVarEG9yC7xoh23ZY6KXW",
  "key36": "5ZUime8vLP8KQRU9F9qjRzzhNk87xEVKxtC4g94xbufHVC7UMFwZ6cmzBr2zvS8akRBZiRZGyQbHWRErgsXTN6Nn",
  "key37": "5kZkViMDDvP1SkmF54uNkkBxdpvCF6RHVQsVH9iEwqsQJ6thsLDgWadncMWkZaujgJEAo5VRZa7F8FuZ1jpaZZM8",
  "key38": "2hb7fQWVPg8vtnWcxZQHhTxsQcSuuBZQzfgPuHfJbKZbtk7UmkiimLjnmUfpcnzM1fsPFVSV55UgAHjHQdj6pczp",
  "key39": "3NxJBQAXRjirHneUVe3CUPvgmLos9AsFx8G2uoMn6N1TqurajP22UR4FLcU6dRoscRhWzFrpSJPtn9eD6Y5uvFr7",
  "key40": "4abzYcsqPsuR7uiLA8cx6JRNXAkT82AYLwtZQMQS3KSSL3L9vaajRnjbY1Fv5vGMQU8nk2BkkDyB2sKCP3b5XAum",
  "key41": "om51ooiFRKmV6YJkiQiR1yGmTUPvioCpG9fkeGUVdkstBM7F6Rx6VmXUjpEEEHQeQxZtaAa13EU7hs35VixXUxB",
  "key42": "McxicrYHVaCfdiUVYEt4jyuqzt7PGjsBhXY4PWMVs58fZ9XwKkBQWNubdS1Gsce2sZHF2cFeC6PwwzsaxvjkMGD",
  "key43": "4xTuJXmJHKgKNJAKGkozRaxPy53gz7kAXsjA11foQhkYo2FBeT1SKZvsxqZCMD3j557pjYH1HqSYyXmgAta5EnhA",
  "key44": "exSxetSpqzVKmigZGDcTYkjvDyC9n1UM9e5DV2TiWrTvbZwPdivDPUYW5mt1cvzMDZgkhA6hvTyemMq3TXCFf16"
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
