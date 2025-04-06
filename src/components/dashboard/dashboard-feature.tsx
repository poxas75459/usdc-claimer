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
    "dZ8JUH3HGcZRuxynbxPz5WqdkoYXpN15n5jTx6Db99cSDzk3FPsu3x6Ysni3MBmSE7mTb5yNUJv9cnMzg1dG9ZB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mbY4mReLqDa5kqr22P7audDivA9jR7Jr8ybhZLYchX2pGJ7ij2VZBvUg1sxmCKS2sXg95w46btnye1xnaTNqfCg",
  "key1": "5aZpCTey3Uh7eSatcRxFs58YuLNCWP6EkNgYmnsZfoJi7MqQkbsrGpeY56r4iH8hWPAGTyiMkNpBmYzGiRpMVHVi",
  "key2": "3qs28HUjJCBxjjGbKassH4Fc38hodh1Lv9Hw2taTa399AMsYEwsnNXSKaUAp9r7F8CEScmXkAVvY31iSKY5KSez1",
  "key3": "64UwthN3eKt826PqLnXYqcs6yn9nFZ5PbDhXnqaVisaL9j1MF1fsaRUevKskzCPiVuYeYGjzTjQCeKfs9tupDzvZ",
  "key4": "3RsgcByMFeDjhvfuKe9RRL26cCgv2Q9eQu3ZdB9ibjyF1AayF7x6MUtStD6pVZbbBngCiFSHqF1UJsMc4GHJHnmr",
  "key5": "3t5TPH6yBbFAbibaqcqmoJicJbcG7RFvoYQaGRKdMwqK4PnUpaonovjseu3rfG166tdDrdkWv6iwQmgzH5Bnb6kA",
  "key6": "ZGoVT5H86T9PmFi1w4EtcHPQzeKMgmWKXzAPGErNwdYSHmhPUmx1feTDZcnzF3JqzhS5yd6Fws8Le7qiFckvNhu",
  "key7": "Gx9MED8GjAS41y7iYY4nR6bwcM5LDQueQyhnfzvwSP4Y6V1jFD7Y4HmwvWsvpY7j39jLuLvqbvWK3Pm1Duxu12z",
  "key8": "VWdHXsisFEPP1Nom3V2FpHgUtRR5bWjrjcEkMfBEXqpoFXgs4wJedrvZwtQvG2EmzhdgybiyQRd4ak5uwKPKu6a",
  "key9": "2iwpwqPCELVM8ADXNWupE3PHwY2QZCUptzn2CwEML5dgRAhBaGcZqqaa3eLX62Gf9oQC1suxncqQnswFfnmToGWK",
  "key10": "431tgnBKhXikBe4a5oVxPPLR1nUaRMvqokQ8HQrD6nYyTJc5yEfGNM9uyHuP9hwahgCt73KRPRErsWBzZepFNhPd",
  "key11": "4FmaDqpC7TSzEDT2bHwiYcgMkn8dnDtqhnJtCb8u1ev9bffBsYh6hFBRRiRKtsfP6tDTWZZYpyhBmuUiGrJjwgxJ",
  "key12": "2sY5Qah7zrup8hCUpJTQehNzFQu6Tq5oqdc7RmN3uZbeKKfMXQbSbSEXkwRfxDE8iVgjE6EYGqTUBekUWfMAvGXz",
  "key13": "5pWYoUtvY1QXCND6uHDurZ3jcdza3F9QZAXkwvKLD4ehByPAKjWpZQoiG9j4aJjU52qs1e6rswL7W2Pu5Fp1KYjs",
  "key14": "y52u1dytyv775gpTiCTdt2EiXKFPqAJcCVvQLmsijNqzu7rJmz6NKtYVVhVJ56BEeJV7dZ81j5KYQAT1PeHxw4J",
  "key15": "GcFyWrhd3Ce4n3SNZ7RCZjdZYueLjDA8ddtiN4YqGrdAYE1FsRYRHSJgfCFDvVmD6vzhfh5BPW4xCJLYZ1qw778",
  "key16": "34jjFeQ6fgviTb9e9fLk74KWcdvdtupjhifdp2M5TadHYXa942vd8bxLKwYgbpAchifYcpYrhnEbMvG7k7kSpc5y",
  "key17": "4SoHn81VynCnfL3mmcaHxmCvBkdVKvmkoe8GtFDx4bNiiWGTyQhKhYcatzC3pPcougmaLAmUaqf9uLsfKqwFEJU2",
  "key18": "sprsvKVKHqpfawdMLamNxVXcrAH9QJHL7bxhxEwSSLdPGFiB2Y6XKHGZvkVG3oPDaG2Ns59dRkaZx5k9aKWLf7a",
  "key19": "2uAe9iPjUogcti3nevLKEy5c7c8nej1pLmxivd5ZnvRDrCZi425dvqfpWeQPMjSDgsTwks1sYk41YgxXxE6JrbaY",
  "key20": "3SVd529xbp9cWjrbk7N5FLtzreQDksE5kxWfqTq8cmsAFjy1FzwVnaCKXo2ngkmVCrw89xx8qhNAQ816o23XQegG",
  "key21": "2zS4Z3aoZTyQLG2GYBtuGrFJ3ftizTtgFLm1zXRNiwKtSxNmope6piihDMJHx4tJqboHbzcrqPkGJZRXFm8cL3S6",
  "key22": "3uATjgAhFZkYZgboxtw9aTD8XeGmsxSrfh1zig7adtUJaKPfjiotAsCe6zCYZjGNHsvTcocbJgHUD6bEqQRidnhp",
  "key23": "5tdfhNG5SuCwfWiGnczP2ua1pvo2hmx61cuTVSEuyjNnsKMYqQyBeD8E4cVmAqbLZeftUtFFu5nrZbig1AZgcj9j",
  "key24": "2xneVjKESpkQSWswwgazQx18vekcuWmv4YR7PWmjADejsJeskKUWknTuTB4nt8WQwvJ5ThsxRytk8cj3A4m56HmW",
  "key25": "4Kc257Huzuu9rFhaZid5Xtk2obBbuxCc6EKXU9caL1q1CisYCNPWCTVnAZSDqSLgpWiBnm1BKCCWGgTAnHTjCBWg",
  "key26": "2BrecfynBjLU6XAepcSvPQk7XtDtBfGHVaeCfSPP1KZWtNdCWJ4oizwxBkZBuU2AUkDMKtZuULtct1oPxMk2oSs3",
  "key27": "29Jb7aripeqELhpnt8EXR6A2aQAoXB87vL4FeNFom2iZFUNFBfFrVEJmuay1hB78aYW8tKjzh2rQyENHUBXp2psj"
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
