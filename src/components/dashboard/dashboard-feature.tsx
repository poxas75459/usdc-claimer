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
    "5NLHpVKeAXCBWGVA3sCK5WvhpWTzmewu7owxNiNy49Pf9rJjkAorT8ZiPCcexSNzNvpx2dBYCgpSLfKFpXPVmLTe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UFkiH7VWG6CH5jfVS3yWhxJBYBSgFGpK3HutmHDao7BUjFisFAvxsm5GfgpxHPiWuk6CuE3YKVX7kBZS5yWUQBz",
  "key1": "Fc64sPEigZGYSQaFi66cXxVdMcGZwcchKVTpgkY22nsYp9nJhVioFWLnpLMMQDxCD5tejggawNfDUkq18N87Qc2",
  "key2": "5oNku2uyYqzaX5o65oRg8gjSzBw7mY9kFDev6HFoVnQSXqdmpHf84XNtf5HQsuz6Fcn6PZx2DDcMhbSkXofu6Hyd",
  "key3": "vvzpkTasS7vPvDZPzLFDN3YzHHFi38L9wugy7g1J17GGQgSPgKfzMx5AfumdKHyPESRQNAytw8uttXDUkjW2tpK",
  "key4": "4tCe2W8LSJVUPJSeZfGL4eAhhMWJ7H6qX4AssxLVS81sDv1DfkAX5qe4E2wEmJf5Magfxcdh1g4owUrdG1jgrSQs",
  "key5": "3zR5vVFMAD1PWRXu4zzYLAGLzst5t4467HbF7dhmkFUxVrgHa3NmUso4RzX1WyX5ogchQsxAgyDRRcogatmc5Fjk",
  "key6": "496ihH7Xy9nKckBaF4sHChdsDeGjvYwpZC6wH3gHTEVFWdL2ok2YGYmz6CcPE3JgzMnh4nhkeKEkxacnvgXfPvxW",
  "key7": "3wRt4iWPnyxzbdidpfsTZMtJn1nmdb4kx1kM6VgWAJvrnriFM9yqqtQNziXhadWiQvDnmPJbpWbGy1iFVRmhNYDZ",
  "key8": "3BnsiWMJgeyFcJjSxPwQXjh2y96fsPaKYxqhqFG1HxVGGusXDLoWgEqfqKs4Uqoiye7FL2ioMQqzQFjPk1b5qFZn",
  "key9": "4qXFr1zsrtBxa7LwMwB9AfsqG7AsfJBWfgAbRGzrx4wsNEC7TuykW3mNEx4yw7mPATF92VNd585rwG9ED3GZdn4z",
  "key10": "5zPmE5fEDiAbDwf6S8guGCAapfBroY1TSQZKcoq1jBZogog6LEnro5MWqduodDBn1nX9PJEVJWXmRtiVYLDx7YBM",
  "key11": "65vny5icyEThYJkpmBPjueKxnqsRmtQ73FRnuqphLYSAaAviMM1PQ2tUX7j85htaLQUUbDzcKWv8rJ5UPRYxttVv",
  "key12": "3YvHFPofRhzM1yPVKGaScLVBSSw8MJYMtNUCHTbR8Au5uskrTZgs9TsCpQejH7huYaMsosgPhQWj8tNqf47djDJE",
  "key13": "2sMfYNGd8X74czjdhkgRjH41BTJwxasSqzwXyhUa9xqNr1P4v569s7RicgfAfM3E37qiUG5p6zJc5oPNTkSgHaqX",
  "key14": "GwJDvFZ4mjmkUjiCe4gf1yPbtebpFJdssiTqy8NWPjn8xswui4zd2y1gw3hfHAUpqqvAv3DvNNH1cpkysytUWkK",
  "key15": "3ErMWxStSaN5EdVWi9EPjW55cuKARWxETeZtCT4XGmuJK7JeVJVQCnjSEuPNS9dAqNbSpfRej29BkeXY5NHXVLSH",
  "key16": "2iNkYb9xcGPcGy52XHsNDKA7yz35CABXt1uWn79Kn9UwLgj4L4LxcMTtdXmiRNigMT5E5TbAquLGnhBKUkgxPdmD",
  "key17": "4Jvjr1kUEnsichYkSkSwcjXqmrMQfDVBDgjkUPCKwPJgZzUjKrmmvbfr67RgXvTinTPnff7JaF1ovEtWpUetFad3",
  "key18": "n1aQ6z8p4gjsYbuUL5ZMkWE71S7f7QWCzbV9DFKwLSULubZqjcXsGVe4SoTt78yc1UotAkEY7A7RutxMKXgKnzM",
  "key19": "h5VyCUmxzhspiriEE3eevSfprLeMtEJ7NNUiSd5eMtfRsYQrrbvZ8w93ZEMKRNM4j1JM9a4tqLuWNXKsaZgX3v3",
  "key20": "3p5M5guEXMu4ue5WUQpyLJYzwd8o27KjxmNVqmk2wjfnj9iqVcDDpKiYvE2UsmtJCEBA8VEeVYeLbaEToj621Byw",
  "key21": "3V2jSH8es58bN5GrSFpHs9GXZ6wvEwkhjCbN1Fm7fPVjYUmbQxgLELVnvm9HPBrDFSHJaTMkAhibDXw4upiJY9RC",
  "key22": "2DjzMurn1ZKNDcDHUdETrgR2uWKqoxZitdMe6hGEuvrEMgfXEFXTuo7HBPyJ5Btp8e5ksPhX6tRceJKAtk3R4DZ2",
  "key23": "4UCgdS9psXWREoP2y5HEtDVxmZLgpYhyyCf56w1ochN3572jSZduUSrQ5iqCmXzF1zLzjirkvZaJFhkRfjNFCrS4",
  "key24": "41YyjXbZMRYVzt5Q7fWhrhcgPNQNFLCpp8ZdckHSyz3RpCPnYcBxS8Pty8J6SGN3c1dYLneCnmRfQ3aon6TwyaMT",
  "key25": "2YBoGThHW6p2K7eMu4973WRrBbdvugWEzpt5fQ2oRnSNXDok7qdPd3NvVNX6jyEn38Sw8AJREZkZK6MwdxMrhwhi",
  "key26": "5yw6FAKm5b9Vtqn5LpmyJbkD5D391JnMonoy7FmWUyQfEBghnoeHBDbRSfaPMRvDBjW2hA3zj2cYst5hTRU2NE3o",
  "key27": "3WT3XwAGjJuAPW9gV51LXkvKD2e1EysQepUMvjiQnmtQN9yiX2p5V16CuRZiYrbDcsi7hhQbKsWLwP3Uszvzy55d",
  "key28": "5a255p73gXMp5GyQWh4GDq5jcNR82NyQtMwJK4Nyah1Ghq4mrtozpN9xsXaqsLTdeQEo1LL4gzw7MG6zNej3yuJ6",
  "key29": "4sFTuFzwPM3oPWnD57iDQ19rVnR98iWTVbPPkaU8PBS4FM8JEYpey7RWD1xr7WGTnUnekPNE596Psf66aokkh6p9",
  "key30": "3DQtPtwDi5ikDjPshZ1zuVfz6LEx6RFkPSjj2U1GJC6cQvgUK8QPGc9NBahVvkHacQ3BACtuJyP4zFV5v1YyDgZA",
  "key31": "3FNSJgCFegqdpDx9FKKQDKoioNEBp6ftT4YrTDi2sx2jYcqBrFtbgzirgdu39TYTNVBX2xsQQCQfNPyeSEcgYV1K",
  "key32": "2jGPxqh3FoF87iT1RZAnGQzDxyS3ZEgdKvsmzM6RT4dpaKobB4QJJrUPoxbyh8aD9gGSTQz5qvXezriX1YHxtNdd",
  "key33": "2R3THyCYMDdhqkp3n7WgSHZarSQdNtuv1sNQsZBKk786cpc96ebkmgnpELanWxwzcZf5fynBFQX6ZdKpxne9zd3y",
  "key34": "28krLgu9s7zEsuC269xjFvJiotreLBg8WviSKuFxd16rfy9SGHorMSSNHswWMBtSmSc4UA9Ac1QvL54VRscvKkQw",
  "key35": "eFedjsfCTWDve8M1ebUW5HwBFL68Zwg5Jyw2Y6t1eGJ3CiAaVYqNpUR4Rs5ES8ommxkuZY7i7NU99smYh2YdjM9",
  "key36": "7nXPL5AemhJxPQXHm7JEZMSqCMC59ZMzbQxrsNnEYwb4SmY1j1T2mLzfZCRpUsiZiCaEcGjem8wXbAj69sn6Tyr",
  "key37": "269ghaQEeMDfSJtFNc26nZ1GNUE4jDYs2BDCQyHhWsVcwVEYRG5yadbbmjgPeANhbRu1C6V2eEkmq4GpzzrbUF11",
  "key38": "2brdcAzvnHwBacW9PaANPvu6QX65Ks8FfkiWRYebfXjPhw4y6BfXrRN5rsujvczznmfdm1Bh9PU5TY6jXCEa2i4",
  "key39": "k4GFTT7889Pp6Mt9aF2ymXC3smiAfGKKC5ni8VHLpFt6eQj7T3h5kVEfGKmDZkpmvLU4rAyVPTSJszoBUxsucV9",
  "key40": "ws8h6rVbUd23tS66Vrv7uM4YEJ4gUj9n1xssJ8CSMtiGNk7gJ2aQgASuGV7WRSf2WSvMiLx1qXKQR5YQUXADN8s",
  "key41": "2Qjf3isvk4ZLTCZBZzWv1kPMFboSpp1bw1qpeTq7GnPMghnnQerorVB7NUazVmUwdzGjHZoXEZQCNunYn4tKa4Q8",
  "key42": "4VprrgBihjXa68BcNc6mpvVoxhVUtTn55fgxnvU46p6GWGsH3uHnUYVvA6KcgNtAE2vGk98YPhJQatkha5Sxnwpo",
  "key43": "4hZUioRFDUFeuCyGj6e8YJQkCtdgADrxS48Dgt2PUXsMKDaeyYuRKTCvN8PCCa7USAKa4nAXMthEV11MeY78Yxo6",
  "key44": "4Sv8EKrCoR7ZdjAY4NSndoAfGg2J5MHGA1wqK5o5AaRAgwz8otawKvSMmJiUuuznwdGcRqFD9Ep83AgHzY7PN131",
  "key45": "rTMLWdL1enHHpiNbidEwTcwk9T7xk7oSnDDTM1DtfKtRD8mm8JpSGQJBHUYbVkAA63VdxBcwg7ELK7CP17ZtqWa",
  "key46": "3zKf3MZpCFFtC2DvgoTrcphbPWD3zbguaVVtfjt1RJX3RAc5vjnKNjxAyy2gmk9mijQ2EyJbBVMtPWgpYzP6dRgc",
  "key47": "5EhVaHT6fKtGLcKb2qzEMCwSQGF9hpXZoEYLKxx3EVR3ZnozrDbAV2KyiHfJbQ81oLW4x8WFYa9xYH3aJwJc7ViW",
  "key48": "3EZVSSTA4qddA1yB7gV2G22qjDSA3wA5uvbNwPqF8qsoocgZw6eZLHmLJPAMX6pkoh1qkDnZp6BMmVMH4cfnvw5B",
  "key49": "585NgRfxn4dzcQAcqCTXhJU9dMfN6So823kN3GTPrerqLHDRJxHRG6s4en8Kd9o6EGhqH1noAPwufutxfYCZ6JDU"
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
