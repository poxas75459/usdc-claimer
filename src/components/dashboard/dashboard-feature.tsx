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
    "65KdkYfLDSeExaSHHTJTQLw2LBGncJS8k5ZGhTR7tmLhxUbnBmqd19WvjZcmAFipXUEg7x3PXckbdPHHiXNXBmt7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TFBikLLFyZHG7jng5hmJDEsmESKZah8kxYbYT8vRErwv8V3TQkCbahgCFSzpkNNtiu1wqbCmobjMKCEtP8PJS2H",
  "key1": "59KpjNomahyb96MBPHTwq7qHwshTLb5iFBe26QYSomAnKwQgwVh9ddSSfvaDbDEe9p2oCHMyUDBMbaeVXFtpdeg5",
  "key2": "3VswyxjBRRvhLjsMbdjGfZ8Twff4dmRocBNMfqk82zh2guyRZDyqs7swTmdUGeN9k1aXaLPDavoozdEFvsBXqVzf",
  "key3": "5i1yZBE1LibGNRVcqW5W8Uw9hcHx4ZNdoSDc1GonMghZi5f1NwNAH75DoqhqLnd7QvLsHwLpdtTPCxjQyQR8sG8z",
  "key4": "48mhRXMirjooNmMGkLTmMZ8JxkHubFUuUZLqxsv9JSgtGNRL1DPEFB5snFgraYtp85znMfJAJwc2e1Dudd1M1ddt",
  "key5": "3K1gT85xRcQRgSPW97nu9JN8Ge3ortyHKWPzQDTdqPTiDt9N9p8riHroQ3Mi236vaJGHANCx1zPMujc9BXTb6FGy",
  "key6": "5BxMhijW7B8nktMUP2WNmudzt43VfK2cUJofmmyoKCAbnDTiy2csJQ4rgaRynbLXiRC7KMayPH4fcxeGfXfTre1Q",
  "key7": "2Sjea5bfGkr2u9Uj3xAWEXWyvj2MbR2z7fpWXh4tQr2WZUNJyd6YaHTrWPeLNPBg8yVYYDULqA78ZLnSmnT4STQo",
  "key8": "4HHNwnD3ZvYvc92Mv4m3gSVoAyozc6XUBrXnkVuZ9CgrmGPbeZ9RZtvgNnLbbbUodCQQQKbvPVW3nqdUZN5TddTM",
  "key9": "imoerES75GkoUj2oKctNS53MXty9XypFAgYuyFqVzHqVYYJ979RKwgH2JBkixDF5UNLydpFcQBUXnuHSb89Px8h",
  "key10": "3NaNfx45zjqvHvwmMJZC7TFTk8YBF7FyaSi2DvkuVpJzWYuyq2583Xw1RoYgueYKuGhBdEQwm5mYfnJg9kEDsiXN",
  "key11": "34R2WGXH81K4rqmDBvUhsyCjZhmEjZrx78FUyWs53PRiGG3vJbAP5kk1RPD5DBYUCP4bvcKLoYTACuqkYTHVXBLB",
  "key12": "3LfUCQ8Lwpi54hMnrLTuarx5koPFdJf3JqFwdhuNS7ULpyk41LtAQN2fwdjKQxCasoZLLowPpgW4QPPdqbiitWmw",
  "key13": "4QPz2EKDNDNgoJCScYZ57kSSDMH1ZjnkM3vyGycW8e6QStz5AjCTW6opLHCndMJeVUDkVouRqWav7pVEsJVnXTtB",
  "key14": "4AXCHciBqBdQjwz4c937pNCysvxXtDhFCUxt56e2VaKQ9zJqQV4n6YRB1LjE8YATbqJqvMBC4XAiN7biu1NpqLmT",
  "key15": "4ZcwauD1TQKnkgRjZJy5uhrF5ei9W1EJwNLkBZ2rrtbVwDFWHvadVcDdQ3v2DFpv155GJQSGS8a9hTo5Rft9ziL8",
  "key16": "4VRDeSqH7g7k6nbsRzXQu2cMjXzDcq21e5LRo4FoV7Vs1vy6Qe84J2dazigMrdLitxPLw6Md9jETdrDf7YgaGCC5",
  "key17": "4gFaGimeNougW2Eb6dAaP2pow55ZSMhcwKNXDjYuuNrqvHv34t8FjVxhHDg3nWcshnZxSwNySmt6Qf7RCNPTGWNz",
  "key18": "4so2nDbFJSTtZDSAfpPWUA9CZgs4nDV9PcwachquDCUWKX8U57zkGPATxTgsdDSnQ1ukaY2fWFSNbpBJ3EiYG6m8",
  "key19": "2kUTZ3AxEBnodvHsLfDLuCrbcwCdwy4GwKc572Bg5wWLCUVHdNtKSGpQUo5bPBY1dRNPTqesxMC23epNK4zX4R2G",
  "key20": "5vrNCzGEpRSgubwjmDnnnWitpz42bi5E3s6sR61XxKwXRrjPxPGMwE9JQTr7dkT6hePrxeSib8FoU1tnRHu7muAz",
  "key21": "4TiN1ihTsqARQhhi5JfoQM86RmdxxXtCdvRbewDJSrGE14hzijJDot2s2kFpYwyPJjEwrpLfEBhhm5RPvzTF1uDV",
  "key22": "3pTKqyLb4reahCN96NMcsYBhvqgYc65BLeQFyFeTgHytVfHNU7sMuSubP1V31Q31MK57SJddcKa4fiU6wMeHLVep",
  "key23": "2CMB7XiM3vNXiycaCUHKPMzW5exFWQtfXW5QozJDYeT3NQMK9U91bykCwtnDQBKS7Kg5GVhpKDHdrNvwGxk7mkMT",
  "key24": "5bARqgeEaw3rgmKam1ooygdQ51QB513wsChCW3EiABWFnTrgx66xmcu9Wc2uBrcLDFQS9nNxGAzdKWU2W6iQWA1P",
  "key25": "5B1zdXe1Gtf3YtNGJbZtksXCW7DnhN3LWRWMqfozbnRrsTAKpgcZXK2Jevn5EfA9BX83G7aTLKaVRzHWRpWhYMsc"
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
