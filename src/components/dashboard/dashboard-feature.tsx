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
    "53LmrTZnYBtRARCKyfd9TKpUGP71KBKCquStgAuAt4E8m4wcwVjB53Vwy6AXhVusr4ZeD3cStuvQzJJaWiD82W2S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5P5hHaoz3JNdkkncYbdi6Y2gXXh9TVAbHYnuBagNfQ6725UByecrepnP5cPQRG3A6DoYMRz8nwbyMYWd4jbGupik",
  "key1": "3gzfLizqG9YqTda8ZoAqzQs2DMLSTt441KnbAB62F34XvxgUEPbmSJonTMgkCXL7prt5SD41WiQweAVBVWAeTpep",
  "key2": "3iFdUQ6gBLwFaeczSXRxszoa6MYJUY9DfzEdPBP3x4ttKSTNomFdNQw7BomT3ZwzABwdg8AQxswXFe4gbU68t1pM",
  "key3": "3wfgmuoh4h73rzrb6JgP2fMRxkaxNxDfLcBPXUwxqa7dJna2ScbC7Pg8KDvc6ytsxCYZ9b2CuSnWe2wt6CN371au",
  "key4": "2Xv28PknFtgvFeTQxcBsQfSg3cvSCxpRGseemoh9xQy8yULYMbpEELx9mZw4DsWfyowaCpVNfqBHh7N2eEhQjivG",
  "key5": "iEdPyeP3oqNWP96xpgd4fNGbZSgb5Zau4TasBLqBwv6qqDTd9KDof8UzYG7iQfucqRmkvRPxPf5NN4SzsqnkPwZ",
  "key6": "5uTEzVod22XPr5mLebDFSHFURsQHqcYFauacLd4zgafgcM8Xk2kBRVGidk2p3cpeo1tjyftb5wzSreR2tDy9TbRG",
  "key7": "5iGQVYD9Pxy58Nicz364R2wD71Z8FA9UDhvwPnPB6X8Nn6MoQaCt9ajXZsdyatm2nRrMyYmhGkdkDC6hQYH5TQ9F",
  "key8": "5vMkYM6VvFLB4coaxPok9eUMBBF9wGYvhCLBnSjovz5PC1e73sAWcsZeLqci2M1Eu9qahXoxhCHaySkrJ86a182D",
  "key9": "uBz621avK5V748fuU8n8Qt3WaMHFpaFC5cp7Lf69DCAbrgvAs9XLHJDq6HYsrVgLSsHddt8pp4e9ja4X2o6oHiz",
  "key10": "5TGT3FFkBJKUKwiuDTJDtob124GqmNbSe1w2F7hUiEp5Wd59U23uk3jrmHYUAvCobgXVwQ6Ebfxm16qYPfW3vffN",
  "key11": "2fmnErnYDHNkEuArFtCnvdTApBozxFCAh3ZLARuvgMzcWALpPGLUUMVaYQGqqAMzA8esVDYrn8PwVr4bXCgNyvkL",
  "key12": "NhFFhCi4zuNc3rNy4eGVMRdSN9bPRQqznE5kqK9hR8pX3FwqtuCPUN5Nz1z6aBFvemxCc4mAvohW2Jh4yAgbvb7",
  "key13": "3TrKRGAU4Vj3oZ7k6fDasTLTi8vo88LyZ4Ev8wEDvHfamSRpHscxxgGaAjANegNfuQivmp7dPxgDG717VqieJQ3o",
  "key14": "2j7nxJ1J9EbqXf8zrFHh62ovbzp7Jc4mHxdjhy74z2DYwNSDGye8QE5T8s2NU12rPfLk8dS58VWGwYp3YuJhneCp",
  "key15": "2FyeadGNVWGfTLd5vJqM8RdkrjLQkkiP4Mv2Vnmg3WbHSBAEPW6EmDRZtbx34u8eyoxsD2V5fZheNK1uecktMVVH",
  "key16": "3DKWLiuQsngG5gZSvVTJMvTZ8QTLy99vdCTbjnMGLJ2EnY4JBXMgqREP5KkYws9LUGPKay4LzbHJU9rkoRj1P9Rp",
  "key17": "58pkRSd7bJSGw4noFcDQbufbs6kLzMWrPCcvbearJkzpqP3Y4F9WmwZdjNcFm4HrVNVxCSESZ2GZ9RsL65Uzf3te",
  "key18": "4X2omxg9L31TmsSxE7sTi85Viczb9w1qZCVZqmiFZgVhxzAkcc8urNhD38e65MLyCEtUxJN3ZmkkBgR7vfrWr2zi",
  "key19": "4MwT8XCzTEdr8uxqBzXUeREVkFQoWUwcLHYxMH9bCrJ96WuhLCGnmrqgMz63JpFn3b6gWk7bf5YUXA7VQFKwKr6M",
  "key20": "5J38Sm2KET8xZdhaPmodAtGsCvzvEQNPz5MmVZcv2Q7yx3L642Btd7b1BjVUMQK338q6yBin8DCCGGJrfcMamj3P",
  "key21": "4xGttAzxGGHfNtGhXSgBvArwXz46RJWNTm9zAcsXScGwtjJ3dXrih13fkjmVpiwEbAZPGub7Q1vu4bNbY91cz4yx",
  "key22": "gGtfqUjGD2X9wYGa7LxW5kMZQkW5CaGBHacsazxjmPpbaBiyGAsB6PJ9wLVzRG8YL97mtfRANGbsEL1QkqYHph1",
  "key23": "2T4jejPYuSppeezvbpdoACD1iXdTNnvEAhKYWofhYXuuvwnYNgkhraKET7StNeU9wMG77sbpwCsRvRV93RR35JMS",
  "key24": "5tfMoAdksrp4r2TV74RdEWWWJxstcYRfamR1QSZNcEVXBGvyMokmvayFX3rnctr51ZRkwQ8ToysqN5sJLjLsfWfh",
  "key25": "59xnYARkvYyRBRzkhbPoZyaUDwFiQA2f23ati2UXxVee95KX7xgLVShNK9YyTSosXehLC1QGkeofDHt8S4DCXNpL",
  "key26": "4te5pPvG8BeJM91VgdNy2WeSyJVDTBTY53cYeeksTTcngbW8inmnBAqHkWoj299kaQzBVjmxizCd8jyYamXux4Ru",
  "key27": "5q7e829iiM7ndfbBi6bgGtMMuk8HFy8htaqpMUfPj9hg3feoSLrE7BDphL52eGcsa6NyL4pjDNvgJsHyhaYP4j2U",
  "key28": "2wS34Uwi4wDEm3eCmKYwCeW1f26ZZQTUU3RUnqxTkH8ai8THSAdjZohGPUXmpsQWVv2htL3beXv5ehLas7xcFydk",
  "key29": "4bqUndgDbWanzkLTkx8BLMuSYhqeBh5U9injNJ8BBsbcxoyaSJNfJGSVeMuB9eSrN4tiGsBriiEpgSN93dParLrN",
  "key30": "5aHSiYj5bV21bFd8EfeKMTiGSgEubtE1YygsTiHXZFwj7QoQnd26W8iguVnfbhqR9ABavBfDZ9RhBxyfHDUwM5HA"
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
