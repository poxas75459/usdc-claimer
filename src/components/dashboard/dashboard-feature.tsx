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
    "2Z65GGU1gZYH2vwrQ3AR2hbz74MnPvqqfW1RLN7ntqP3ygU3mQrT45Xqbs1b5kqGpn4EpkWTpqW5BfvMm7YW2h2e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MKsjVc8HLFp2LTYAzwvKxFPohxffYQHcgm8ep6ohKXnnwAc7mu1GEHXbz33NxygZDcQACQU4GndNYMGLo2R4Mi3",
  "key1": "GUqzYfXitjEDcptZ6DZvneAoybHjJ9cwZs5hJH86YaqQmvA9a4KUY5CBNTYMtAmv8e4hHRcdaShFrDM3pekeu6m",
  "key2": "2Gc9Ang4VP3G8zaef1xDsw2MzQDAx4F7ykcugxB6YPcw2ARiQC8jNmDzUAKX9gFC6nMuVAz4YYBh9Jf96XDPbiWG",
  "key3": "5vYbuczf9wfTnktKAYJKnY9u6kpnt7aQT6ZnB6fnUzSP6U7LkkmtJKUkXqxsVQktYKfS8T8gNrxc6QXh1KVEiXQ",
  "key4": "24H5UXj837oWrtw6LMxcgKuMkiyw4sLptRSaAG3dDFvniWtzP2RDkRNuBthXxiCPGTDVt4Ly8jiS58jgmtsq69qb",
  "key5": "3qkKRZDE3MKAtaEfudsEZDt1fy3pWg3WMgATM4KUpdYWpMWVyZJYNbQDvutK7yUGX4Lgcfn7zpWnfmLDwNiUCRv8",
  "key6": "2aeLquKmK3ZtnjHR3kVMY9p4gMHd1Rz74vG4wVVYkH6HhU3pTr5p5UzQAM24BqXDV3SPyDB8TAnVrQ2Lds3v8CVk",
  "key7": "4uwepVEK77zRwb37NgtrSEi8nf72TkBX1ShJJJpx5Q5D9ivongRDoFq1CsoZt3mwQL22ouWBDkLbWnmajrEddX7M",
  "key8": "4wommXPGeXaohBEkHTySTG8xVVy43P6rep4SCH7yrGccVtsa3HKp6jA1BEqQLQptBugeU1hzZxBzkj5gjrhLDM4R",
  "key9": "67TvZFosrx5CniwhZb1apnYSJMzPQxGXBN5GiBxMv96rJH21R8bzYTCDkwSPBJZhVmaPYG6TYtGgka3enASkEMLW",
  "key10": "2kdnjaJrboDiXBW6WdSqN4299Z5CzZaFdX7YUtEHRDxiSrjf2tTCWgnG5SjbmXNyTriLpHFPwkVGaCbbAfnY54sM",
  "key11": "22EiT6F5mah7NN2QnLj6G4P9NmmVBhzTmcVwkhY8e72EK92ZogbywMjTdSo7CgRZY1e1pg8PJoCx9m6tjJeXMBu5",
  "key12": "5S8pWWQRoxfDMpPZALz7Qh3REQe8PwUnKTCZ77SjtoKLnqk5W4d3y5qrSs2TRvCcaAk86GLdgRKsDvnB9F6d1rxA",
  "key13": "4kctV7z4WNCVtFDHWrherujhdpubnTawL45wnpv5NahkqNNW6L2Dxfix3usgwxyJP4XfJUqqhoz7tJiGvHYdf8Xg",
  "key14": "2FeoRR5hS5b52ewFTjbjpr3CSf7mkASC7yip4kT9rk9rNUazQAnD3CNaX89ZYRXWihQUnHGyLudFPb3ntU3QYtW1",
  "key15": "oV7aXyTePvybQ2q7iLsWAxws8GWmt4Ha3tSheoeNDxAoPZtG5GrKZJTHUGGr8LTCmrGUBDEnzaXfuuniUzf3YoV",
  "key16": "5Lt46hcEdrPg1a6FQYqWLwvF3AXvezhB9abZbWp755uLpJhHbxBrBHtFiG4ebNT4RQCo1K17CnQZPWkisDQQHHGN",
  "key17": "3nhmpw9KENDkFmCH4JWifGwPLVhdszwVmaTM48ardMSDYW1YtbDXGxTGJ4PTiNUr8gPrbRZ7oWa9Bcasz9PHkW7C",
  "key18": "3QPaxCTHKMHBC9n4BVjJqZdkK9uUFiXW2BZLKUVDo52zVjj99Qhsd22RiFzKNuDWHjxnnvhuPsAY83UurUDaUPEM",
  "key19": "3mngfFFuTaBxB9siNHRsWjiGHW5wQ1Rg7CerCD4EdHzqJM2PkWpeX83vb5Ls18m3BhMAJznVuBQwkmcFNYdAFAe6",
  "key20": "nmNWxwZX73wLRLGFjFqTSTMT5YVmS7ARQrexUQGoUFC9SXFYVkBf5P9vK7NCZtmv6pKV6gnHn693PNhWmjCAY4H",
  "key21": "3ZhXwfQRgpt1231UjX7NzYRs9WMobeDibj17duFJaUC4QzHkTkiE1xscdukgS43VFPBBmaiL2FXF1oyxpaRxgsPA",
  "key22": "4eBRAppiFA5paHps8n7GrxqJjcs9YipTL1vW1jTfaxpxUdWgoMtDWWj1E5meda3Czpt1a6hm18oAzKSVXQEC4VBa",
  "key23": "5RyjfD9BBd7yM9Y71ChQivL7jziKwApiLVjRBhfPD8T2qVrCzgS47ozcvDRLJUFbSx7KVHGRYXT4Yt3bXfDTsxtK",
  "key24": "4Yeap8N2oCxTuPdGjUSABvrzfh2GCKcM4oazMuMyTUbLFfhx1zy8K1Zpqf8uwVzt5F2wqPyNTHcfXMTfJchCXPrG",
  "key25": "3zMCooPXp4Dc6ZxWS6r5rvBM9rEdiWPb8ph3SqX57TwuK9bmSzReypk45XbBE4a6xTi9yRfijQpAbQYkPkzquz1L",
  "key26": "3f2nKoKEgwi5gxLVFCmPY9jVUykUEQw8iA3HFoVrsgTwxTpA8pnSPnV4dbZJm6hAptvcTt7Zd8Fw2aWx4bJcm1eu",
  "key27": "4EquUBDJW1BhsNUixgyvih11GCUEd83pLjXrND6gMyihNDeKzAmXRNywE1Hh2ea87iFHRWi6e2o9Rc3JKWE8fPkA",
  "key28": "4EYrhcS27UPgRoR4CCmLnBLGBgvTM35xfRoi6JT5ntAuBro6rHkH8vqdxr9shHERXPev9Pdkyad8WYHj6jaTivHb",
  "key29": "3yq7qtAUyY7ZDdoJipSrSD8nfZrnMbfWyqHJNPhVXAJdgpb34SK6EKuU6CyWBgf8jQNX4ZUZq6XM2rYSFZqi7F8b",
  "key30": "4seyrHKb7kz5Jp48iG5zRaigZn8kvneyzBbH8TZznngjWMQ8Js3Awyv2xkfXtb835WXKoamk5YPCgCAisKdzcqPx",
  "key31": "5y4RdvnUbdh3CA51ySsjiK6qPtmpJ7m6vTxLSXuG2x12JihdqMVipbVY2NofYBB2kqV4MxZWCjEfUpjvAmryD2uh",
  "key32": "2TGiaZQPvHrniAvWDVEjnVBPVqD2evBbbT8QnVT143x8Y6L8r3rSY9Lj5Yo5kibnicP418MTGqpFrb4qvQnWPPhG",
  "key33": "VXhy9KinrPKex6fW3DQ9Z2qJaoNNqaSW6J43cjwo8wJmUKayau3CeSpohvT5sWb8UMP5BPFKo4E8xDhHXUgj3CQ",
  "key34": "3U3G7tcFUwjiRLhvAbAcVQatA84JevEgz68zNCsBsJRGyNbuRy92dHKjrN7KL8qgok29hi1X1PY4soUvJZ2Xo8r8",
  "key35": "51HfmJh4hCdXB3ausgQ6heZFLLe3aUnDioA67x4d6sFU1und8ZB496tuaDaY7siF1L1LfmxeXZS8Br5SHrdWhpVN",
  "key36": "4fqq4epcZXHiEKsGijjBtYyhaNRkVZpwwrMvEgGNhLzD34oNVANq9G5vwo7HVyNwjaxwbhudeSKiRQB98nE5zZTo",
  "key37": "3VanFZdJ48qffwg6f8mtn5hQnSTCfXw65BriL6xMGFZNuSXpgnP7YACgxWQKheFQcUsjdkUqNb8FWAvqY28geY8M",
  "key38": "3mbA9hdJ7rRdyf6bBQS8yRA157h4cbzn8PgX6hKfb8vCHy7KS8pJ2dd8jZw8KVALUgb2xkgU947trr3YhJikvGmG",
  "key39": "uguxSF8qzofzjjrPxgn9zbimKeUHuzSpjf8jC3fcqAdRcDTDuAxCJ3STTs7ryKzS56AmJu4sb44ydmfTLiQPQmh",
  "key40": "347o2F844GwEghmRvpnS1rVMiBwTxSYV7P1iMGPSbQykJpu6NHCt8vDriSyty6xBrX9SjqSF5xodsM7LT8dPuH7G"
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
