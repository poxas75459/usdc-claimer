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
    "jdjAERETPju9SE5SrK2AocgGZG83SJyEh2d9WPF5MXDFPBGBrt4hq6ec8EC44dAdLr2fjByWbNTNLo7AgCwNSak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UKdzqmhNMsmDxcwDh9kNXLRubPvWhtNqLMGxiqoT2LVgGPJqJVhNuBz9gNYt7kjbszxT3ykSpqdH8D8bgskFMEU",
  "key1": "5dmiPKMFjEiGVbBnoo7xE3H59xASh3xZWz6HtEkoKaN8Ak82tvRAhpjvGvMr7mRjCKTa9qETTaGMnVDcWPvMTBYA",
  "key2": "297tx56mkrGgwdKdsoS9BrwPokzTpZMZ5mdNkfMqZYCUp3mwqFoJH2FVmbHYt1nnrBXESNsTxQBNtjbso7ZCHWiL",
  "key3": "5ojkR3nK69VjimCnS8be1KESh7XSfrxwW7d9JoTR4PWDrzrqnqCtUsukmZDMCbVkdzyvC2RzB9GXWxf7VPasvzQY",
  "key4": "A3GtV3TGbyn1xXGyXuBbvjvWyPZjnWMLd6bYSYaGisZVu2eNDsYNYYhQbvjS51LM2onQBrg52i6RqyYiSHRN3AQ",
  "key5": "25aXsH32fsr4Qvvs96pTMuyqDsUje33XeQxfLyDUd9Q8cQqQi3sq78gJCj76m9rmKso5Mj4qVrppkLB8V18JjcDK",
  "key6": "3YHVtWq4Tq4P8Dzf4Ucf6rpTidejmJBcxR8KSPgnNumWcgHAYmmjHzNmXCb3bzKGMuJV75ChPdA4X2VY7Um2TUT3",
  "key7": "n4mrSEKw7XtzoNsmSHbSTZjom8oULZnd9ozb5SWWkCssfQ4PQYCPKBJppx3PCWyzB4dUPR3xWnW1P7YLT7nVkYc",
  "key8": "5w3U7cdyeoy8z2TUmp4q5zmFvpaWJfEp6Hdn22SYMgCPeLbC9izHh7znTKDDZcEMTsauQXGr1nmQBEbttVtJ8SDw",
  "key9": "2PhKTvAxNfLABrrW2KuHL7EFVMfPcQD1WsPFHWFCptgFwymTtpxRY15NrWjsnTwZPVkLAoyfqP2U9aAfqrkBZnER",
  "key10": "3LZ7n2CF4qdWbLrzfsuRiofAxtSi2f2DFDrT3tSwyyJkZoBtLf3N3LwKkYfbA99KPChnfaVynAkKfkkctmFSgvEt",
  "key11": "3z8svDkHJXKZUstAUj3NWuaDbMqzptN6KRgoDToSg7Sgw8XhtMZGMDGKvspJLjmQX8Rexfi5Qx5b3hgzUiv4ABuq",
  "key12": "35LQJDXUqHc867f1sxe2pYR55iFAfmFpZmLS5RktTKcAeV93zyiyWhndPhzdT1Uwpd4N3aZJd4pzrugB8owo3GC",
  "key13": "5TA2ESqmrnhXcayFUmh2HWtZWEpFGY3jCDPPpwcfmb2j6hFMZa6ueyMgViE8bB3xRmPhTddL9PmimVbkpBdK9og9",
  "key14": "N6c3puxQra2VGa8xJ4yPmK1X4HMCEHHcpQ6QCCnmngDK8XjrwpJ6p8CeKhJoL4uzCV3qfdNoLbN3jxURiZWPgaq",
  "key15": "3SrR66RxHmi7EH8w2YCbNXxAmxXRycuUAtHuT8QYZHqnXWTseKripk3ruxGKZiAczV5mUjL9vSsuU425w1wGqND",
  "key16": "gF757UEUnvBqmovUqdNhqk5DNqmB2NjsyvjJSLoBfurcWgCex4FAvbVBA71oX8N8zvmoAfmmKSgaEEvMaFGMf9X",
  "key17": "5ki3Ud3CRe5WoWVviwm1rX4pNx3pXtV3qbqdfgNSCq3gyTdUDcdBGLRQt6nBgtgSBb1wNMCV5SGSgGUH5vnoLzUC",
  "key18": "39LBqR3NfqTcsgYPGY1jHRZbaHBrQRKSySqUpwJeUQMy3wJQjABYvxQUTQv2V4zWK2VLaTajY2d349WbAitU53Sf",
  "key19": "2ynmBY3pFSBxJo7g3aVZhvj3PbPXtMkkzx1k9kb1orU9inH3wQVUrFNL2ASw2sg7KhL9Giu2ys5XNuUEZLthYJ94",
  "key20": "3dXo9rJjVnqK4kiBGk3BPZWikSMTWzey2UJK2USjGGvrXUk4a4oaZNGusmYuyVJfphRrWzbWAfyacv3WpCpb8CoH",
  "key21": "4NbqaWYpKWjPVEKjJNcBD9JaugkciYNJpcqP6Dav7AgoeGxBwJhfVRBRaNs9ERAcNYKDdLza7vYDHcfg6LuXcjBy",
  "key22": "21NNgKm67K5ZjmvY27E6V6915hFUEkoWnSHLaj2KwM5rcbrfpE2Si9MgGupHSV42gBmoTboAvU7B5WyhuRsJTLVu",
  "key23": "3h143TQVc3YknBMn2EcVCNZDiq2VCb6zdxDnGDTshKwvcS4JKGjohfiJWddKkNavUyTGAhQxSaPS6FbCTYuFBgpH",
  "key24": "3rH7LynV3PRw9rZbErfbcA73qMgNykKTPPx9SUsoNLBRWamoyMqvNQsXWKj84drYTxzePXywNTpnZj6fbdYpLYAb"
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
