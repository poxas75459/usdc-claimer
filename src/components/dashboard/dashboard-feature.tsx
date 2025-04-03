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
    "4bGk5VzjuyAxBJPKjnM79AeJdbUQ3kk2e7LmoDAxASVV7vjojqyjpwAH4K5DMzJDcsgwQotV43QoQBidqExytnYQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jmML3H8xyeUGxAttBbZ5uDWHMZ7W93CxqSpnQtakSZqKZR7MKohaZCcAcaXGnwT5QHwywYasYfoVkgCRUKiPQNi",
  "key1": "45nMh4jqErD2iTEWgLH668d4WX9sFA4xjcHrtCiEDizqEv5NE83DujFEZVyZobGmnoXgGkfnpAW5akNsrtsk4fz5",
  "key2": "2crV5wgEnvFzsXPFdqUiME5zFdBs2KLzmvHykn2mmDqLBwTnPTsQL2ihBCLAhzX8psjhUxvhEShanyTweDBtMdPo",
  "key3": "2zk3bjVPVZTKYyvAKbtpRBZLiiknmxxhh7NEzbpwPusATpK5a4QDor8TpzJYyrYue2QLtcEoRWEbjADxq2TrxptC",
  "key4": "2d1itaxdBixvFzuqR5ArDaBFvoVJ6zBqcc3xkBaADsXE3MmWTYELQWEfWzQEhTLHivkN6rchyXzqssHdg734ALGk",
  "key5": "3ErBmV5kh8w1ctWbfE4KpPQupThtTbhRgcmeZyA56cBzvAC2AsbDkez5ddc5EMoGwYZiXnNeWWwL97PWQzoqjcA7",
  "key6": "3ToWNjsMD9kMjx8qZwCLS6ncYcZ3yLTyR6df5iSo5LYc6DQ3LQn4ZUkMBtibkB8A1ta3S929fEFmqfyE2uq9XQoy",
  "key7": "4vtDhUGagPpMAmyhWLoroMMn2dCxgBZRgmnE6y8tpfjLVKmHUAeSLQy5dLcKq62JXmRjVwraJCA9gp2wtYtj91K8",
  "key8": "zABYjSbuEEK5dUqp5ktVsH4SYZM9gq1pk8q5xabL22djnEv9QZ6EtcYLemaEeGQM35xFjEE8fT5FnGBo6QYcCj1",
  "key9": "3ezjjCKZFH9qN7rxDYr3bNw9Nc6wbN6rE9FPpg3Xtbv1eVCVkT9qPtrsTSJkB4UC1v6tCUBT5r1zCZnyTBvjhvG7",
  "key10": "8fx4zkogKhJ81ELMxmpjWcFb1DJFAEKg1ged16pfhMdiBW2p9y3MeM3H4ybQLy1VKhx3pWQzxsg59yBbxwivxee",
  "key11": "rxoN1R9Hic4j9RrezzftLtMpqAA3USrGiKVF5kdYG359H2WMrEuU3hQsjtQavuAwnL2qpbQomfu4sf8fyLUX2C3",
  "key12": "45bkVVsUFB6yF2sGQkPTHUikx7Dyn3mRkgBxaEKCvztPi3cu1822iCTcKjkgLiSQHEuBXZCcUikAdukGsDREPACr",
  "key13": "4pgiuvbwQozqHi4Xokn5bLmps6DVpBTreosXa4PPzdmdRiP2urUraoF1VLBae264FptPgKAJerbkDEjr3prwJh7q",
  "key14": "43WyyENoGAd6yKZsnBjLvmhVSeY7vakBUj46o9DKfxqDoTKMDcLuqhrapZtC2sVPCGjeuRePbcRwrKn6mLboDHgU",
  "key15": "Vx1xubuBoUPaBXtxEgrhZ9AbZCM7YC5rBJpPfWDWgA1CwnXM7NP9rrFw4zycJeSwRWyyUVKWfZ1ubroYo1rr6pL",
  "key16": "54fjoR4hMFkZ4zFhm1xyRjv7F9dFda4vXEdL1ADiWnRQowJqgt8JyED74vWCnMWAGveV83DJqBkj2YAsXbfWiyhR",
  "key17": "3MBjMG3mywWj9xSDjLM5SkuuxiQ3GXJZyUjr8C9z2QpBXrXLyp4VUN4vdxKWNov5HQgJRZwuv48LnucTRuX1yAf4",
  "key18": "Wfq6ECnXhFTA7ueZaRnuMNJyAHMqinwoGKL1UzPxWt6AeKXyjHL5yJULPpsjrpTiicZAzTwbD3goRt4pHPgBsBT",
  "key19": "4kMtYKK2yEEvAypUq7qFSue48wJTF1fg91ibcMRso8DKX9j5ejtUho2zG7rT2avLZANiAoexTMtWaswNPafjHhiC",
  "key20": "cDSnbKGEmANNrpMMLvzKMyZikFLvcDdZ9v79pSJo4kSPWbE8ANkCGhLsgDwaYsM4zAaDiG87eEEBzxHJHJAbnAs",
  "key21": "66gwrjmaSTpgyQ77vSCvcgNiuxLFDUhaFBW4dEwxKeEWS9XrjsEbYyUrctNo6AxctGYyxPpS8JQQdUj39Xh6bqvN",
  "key22": "3EypLfuEbN4Jd5FZ8E97rM77QBEgQmw3JTC3DQKhnm4rGbLtBbmoataFpJNtbvTqTyn5u6nDYJPWNFCK4LUVnEzB",
  "key23": "59fwSBurPjPZ4T3YiMZNxpVmyhEe8g2LP9MLZTNjdNrYwvyF9mZxtWUQfLeWt8kAUHWMuohmsrunASusGtN2aLWf",
  "key24": "38Fwf3FA21BLpvimB4UgGjADbgsfv6hWpzRgp75sbsrY2wTToXRdwiFRG9YgxTHcTGS2XRcduKsZ3ofcmqzzovxQ",
  "key25": "5JQPyaGtgaJgtE1b8MZRdxxY3qTDNMrSLYsc8qVh32nbyooCwkCiVeGv2Nmi6kxZwUCykymjXtXb9oTRRCSc9cFd",
  "key26": "56RCqQK6uE94Q485iAxjDZUmgR8bJ8NmUZ2XT5oG1sjL89SVJqnmWsFpcxxLyfsbqP415RiVdkXeugRcVLdBizaM",
  "key27": "3qbce27yLEuZ3aQuo82fksGaWBSgmLXN2ff1h3meSs1kxCEtJfgw75oRXgUdnoSocUFjUARBBR5naQMReEY8Wx6e",
  "key28": "5nzmw4ap8CoU6yXybG7ewhbjBXGZ4aVz1CMocmERh9UtYuRbTtLYe8HqWakpxgWf9kwN5xuZxKxtypMNpQJhtmhg",
  "key29": "2suunpogYue9Yw7eTQunHbbVb7DU3YxmczwRwnszzydJ9n7AdY2AuvPkQz3GsvUDRkTvPPQ753J92EV5T1JK9fri",
  "key30": "3pcJuDp9NYhaGCs1MLAvrQfmUVmbx96MztECWLryMoxx34KtBFCg8E8weGrPzEP7zrytDdtJ7oDpEpjTHW3Rvc9G",
  "key31": "3XZPxDCkEU7aHMr3VkhNMBdU5abeQR4DopJqXtdQgk1EE8ZSrAB5amtW5v1AiaUARCvELutL5ZZbP8kiG2Q1vuP4",
  "key32": "2SjQR36C2SGGeVFExFEnWzLfyb7j36dhAsvQH9hgyX3DvKdC2PU4BT584MPHg9CWzE9p9tbXGeV1GSxDVh4YzEUS",
  "key33": "5JEUkPpR6nPqL33Ar3y9DpRD2BywHnGHuzk5ULEj5h5mNPksgCDzbwrUoK8ewZhExav9yLPsSyt48r3Z9LGNMGKE",
  "key34": "3FuU99FRg1Ry1sh5KhofGwXT3iJVBW8YxwM1rqZckSdXfPP642RKfMUpnCd36ZZ9dtTB43hQPKwhsbRf8czPDCxb",
  "key35": "521VoW7UAniqnKhUuNtiQ8hVoP5V3vxQ6qgE4XswuhUg6eB8CQES76FA1SAsNTbrJPGhCii2M9i2VaHnxhLUNah4",
  "key36": "FhgdoaS3HwoE9KwEFdBAw8HjuzzcYhazHqftCBa1dKL7VLAYx1cdYSb1bV7LA8EUD8FVthWRE1ZJg9PUA1XfX6P",
  "key37": "3UyFtfwYexacgA6BWv1h7uq3P8bJwv9QfmCyc85Kme8dLT8RWunYagiL4x7extEPEWv6YqV8o23PdtC1mDoYHRwB",
  "key38": "qzqBsiyD3w6uzXJ9yVhAUw8qySqF8cyQHLxVVwYkeEUp1JwaSWk7mcD7X4MxCpBijT43QWmCevLWGfcLnf9Ufo2",
  "key39": "3zaQXSv93enoGdcKJPqfd4j8cTGTtBxmiDdRkqkRaYvtCokva9ZWdoL5xopH7pXSJzD2YceXPTcR8f1Ewxx3PdSd",
  "key40": "3n1pFvxtXZHeYxAJUdiY832Kk3snq3zx3na8BAB1sjjHRvM9JDp2DFjBVSzKR7t8C2AEs2AiW8b9JbjCNmfKrajF",
  "key41": "cNBTSeYgBMSzSeaEZnn9JFeFeGkkmVAyiGEHruGUimAr7UD1kfnm39gyPKsWt787FoFwdVrtxFGEEGh5c4yT741"
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
