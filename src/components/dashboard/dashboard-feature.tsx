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
    "3dCwaCs27Rnt8cWFbpjPYpUetXmCUx5RFoxbMcubbPz6wVhUkwu9ozqtJmbE6Aq4WzYX6akjzXkcRUvTvVmsuCGp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fTCgQn7pVQzkhMCYJBsqVPR3TFDKkJVqKTDBeYeJsDuYTcutoyVU8YgjYkYZ5vVbBdfGTxwPB4XjGpGjPa7xNQi",
  "key1": "2GCieHUGw1jszKSD6y6Wh8pFdPLRoFQip7T8v5FS7bKx61TyUNHVt93ek7iwsepYHTWxgHbVdJuG48oiXrvWoXrt",
  "key2": "4vaLhZBqdH5S3MPXMKY6Gf2kuJsTcB6GjH5LvzEf5LadFYBJopNvJJCiB3eUS7phWi5bUJjXW7Vozy2NX4P7oHqE",
  "key3": "3gsFJKM6gKbc96hag3tRc2ChHTQDkU6cnknHFduwWC2fatNq7ejGfa4Uimq3pBhaLcEawWVV5h2u62gwc9A4V2iz",
  "key4": "2B5oHCcJ11zZsTBjomj2mvSPJUmU3vD8Xm82Uvr1kRF7dPNysEyXemhvQ3V1yKYyRZEM9kqsokV3y4kTJjX1J5vy",
  "key5": "3xE6UGXVjvWPjqSyHutS6Gohyd8YqLWwX9GeXGFwHdmtEbkSrb1RQhCJowHR9wE78sStmmHJiyrrhYPGsitSUdm5",
  "key6": "3Nbk9qTNzdywXaeau2vKDtEfjGrc5Acf7SzwR46GrfouHEQxzA7wCJSA8NvSSgyDESvodouPgxX6M2PLMwb5tTvw",
  "key7": "4x13V4JdV5uz7reTUS1gB8jZ3GdEmW6pnsmYdUCS8kyLbtBD2PSy1uxei6kw51Jj2svYyqLJXttMA8E3M1goy8SD",
  "key8": "aXKoL3GBP6q8MSq2vrCvZEvJrLjCpM1mqtxMgQeNfxpcMYViBd4amiwBwU2vnWjRXX1qhkHz58qgw6hmaTDKSJj",
  "key9": "5rjR9noZspUh5LpsvgCyXxsD7G8rfxLx9ytYyVXobr5EtWxrf5uAbGHJS5bu7zyiA1FGScgeFo6VfKmqy5TUfxbs",
  "key10": "2F6RgzrtHtFEtqbY5Hfi8HkianyeCPVX2VoENSFx8YFAUaP8tQnqsonkLxnNTXs2GHLE569HriuSRPtGPNCrSK3S",
  "key11": "59nfnG3jrXtfM9uU6S6EdWHjF3QSvP6aRiaX7EJXCkzg3NobS4BQwfxZeshGaHTGPhYzkgunus3t2ELHzzVUrDbd",
  "key12": "5k5T8QRVL9i37xWs5iBaoL5fo7nCWtHh5yKkmmwDYbBmTeKvLed9FBLc8JfeHZXb2MvTgqyxRNh7EpPvP2aTvTvC",
  "key13": "34oTh84xPj16BTAyqRxS5H3dMujxrzd11NWEZiqpGSSSYuA78xWfA1mmjrQhjGi95y1pV6R2zS3E4fVuzsCGXgqg",
  "key14": "4Xktu6BLekwBdtzGtA8XmGygcpyG3YG8SQaN3uQ6zmfDaMW6suC9GviDdWVsPiKcbBW8MFBnX5sVXL3GCNaBtswW",
  "key15": "3tarJTmUsBUREvUBaa5iBg13LJdPK8bypPM9SoFVwA6Mj5FbYH48rMtK2dPsurEhEbkouPKmDucmYKWAdpKf3i7U",
  "key16": "122pCKEoKcSGkgaEMhTDcY69SFEzgLeNAqmhci8pjWNUdqXTBRMgTL4ro7sgNwh2X7NKGpnofkG95Fhi9CWM3ZSi",
  "key17": "3wmQpbrGkuHRPVqLGBa4suT8KrRKGpExdj8TM8J6NdVWKj6SnUKpe2jsm5ZQJP1TrJDKdpSqGQkwVFjXayT1yTz6",
  "key18": "y96bixYi9C75oRxBGReqyEHAYmcpxZLMsckdurh2N3xRaKqG1sc6rznEx5snVAn292vUzP7orwq2b6UvDbje6kr",
  "key19": "2JUZvNVPnD4Ybb8MHVByhcq897QNo1xzgCe1TsZcYo4uvzpZswbakWb6bLXWF5yWTCaEttRkhU64sWbAAEr2YdNt",
  "key20": "5qPqcsbXfi4bTCexmbqscNrRj6BWDbajoy7PQtrCuCYLSk9B8GedyfUEKv73ftE2KKRYgZ1FEJwLNJznFoRgmcig",
  "key21": "3494Z4LGcem9EAiBi7BahHTznDkn2N7GxJD3XH76hDMygMjhmU224SQr3EmZeQEg9BDhEWLzN62AV5zJErx6SwP3",
  "key22": "5Az3xMLuWh5S6EcFxS2VEZMBhjWkart1NvGqaw5Ch7ARYKwpva6eDyW5up2bJvudm7z6i31FJKZ6dbpjya18kTNJ",
  "key23": "mwYP9zhGqkTfcxpsKymupNBjzAEGmUWmyEdeV6wHJ8LhvePtnwiF1so5QZ1SZBdShQPo7hqoiSqvaAf8TeEmDuB",
  "key24": "5cS6CZEit64cb5F4GP1xhvUxc9bZ1nTM1ij5V7AouHSdUWKRmUEi1oXanTrUqufnsdFu2f45Z8vxWBhJEFbgVv48",
  "key25": "4zhp1Cnoy7ueMnc8bW3nvfBpDyZ1FuG28FcAMat8uXdDsUASCgPNcCofV67WYV4rBmQPY7HWpFdGKWNqYRyJFFv1"
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
