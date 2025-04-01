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
    "GUWjGTXDMf3Ygj6WaNgu37kHdJr57aHBFBt8VxxH3pV2ts9deQU9wPSNLWrQwPxZNPeAxnkM9bG49AMGVpbNW1T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jrE4azvzmK61mnV4rxmkJga6FKj12RnY472i5T5aDN8C7HBoM7SsnfPoAErgRwXmu3tGVWGabYY2FQHSdbUmaZP",
  "key1": "5JkBpdKGkXwhBEcfKpAnL4DEDZpGDdfNGCkyvbC2XgBJTsULG1fgArMJva3G9CnTAF6mpJPqVvpPvSjKaHcbewcr",
  "key2": "Ge833cW2JxUHoVYYuaw8vtFCMKysMNAsxNa741mkRQNpkEEEXwVPqe5t7iZKs81A7fKGyBRJYEV1RSoBPwkB1FV",
  "key3": "4W3Uko2RNy1bXEsaXPb32RiKcrxu7bTMwEdd2PnF6Qc1qnw8FGPFTzuGZ9i45xLG5NJwkDa86GGbdoxULgwqUsAj",
  "key4": "4SYHWfWQE41xxrnFD97y5JioqFiRM8Ks1T6PhzWZifCncRzZFVga5WX4n3z7RPMWKxGigrUwoja6XiP2FMNC9VX8",
  "key5": "TnNgfLx2pdxHL3uZzTQtZrDTZiizhhnxk5iF1hCLv2QHnJnbDV8ne98aNfQ7zPMSvLve7AodM7JuURTFaZZ7q3k",
  "key6": "3e5Mp4H7pvJjvCKoUV9m1eRnML4SRpqAbvcw928a7UVsukFXRNL9jFBN8DMDagPxA1D4J7H5NdXCusMQsdBc4rMi",
  "key7": "5MJfbWPVNSAygWRE9Xn3PxNgmB2AGjAppqKsAEXLsu8ojALiH8RMDLS34YM1mbfHixARARrMXowUukhFeoA7KFDS",
  "key8": "yR45kXPEzLWaRH8uSyisFj8miFT8BGs4hppABoBnPbMLwqJcM8USv3RfCNLp6GR6o6HzKjeVJ556MTZsEbNHDy4",
  "key9": "YBUYREuA5gPvK6mgSHmbwMvcwv2zYqRfUQiEc2ggJhqW1ymhSvw8KV8Jq2FfU5Afm8TeZqz7pPkbnXo7cCZNves",
  "key10": "3uXTnU5NHGZc1iiNU5xYLYrPfXDy2RCkSNP8nF3AhAxpwC5hARKWkEuSjiAcF46R7ZHUvs6G22R6zJSvLcTr9VjB",
  "key11": "3UCw16HsX5YA8D4xymcbryA2X5PgeJQQHLvpRQPuBK3D5yXCJyKGrWxJHmpG1BC2uBYYdeoAefnYnjGLtDLeMpbX",
  "key12": "5NcZSiVgFu9DdGU9Ssuo8GYfy4NuW2nGSb1azbZXJnnBdEF3ExmVhf4Np1dizqaCs7Aorobzj5j37iXLWuR13fzz",
  "key13": "3TKQD8gYKikLSyRZGpUcpYNXbeDgwVjYwwSk6HJbRP6FSLDBPRABkrBLLmiqj8L2FnnSbJmdFRvCEmaeGZAGWahx",
  "key14": "mC7ALFCMz7DrSV8SNs83bZHBsvpXSCmFTV8kQbMHCG2G4xBxghLdMReMCLdKjtrvjMbQiVMQzE6427mB9K44Rgm",
  "key15": "24dYkJtRVu8f2ExAWxQuaTM9WzohbFHAYPuoQzR278oCqgwuNuAack5pABZjnW7i9cgJ4amcUpGDCN8gaH6T6qGQ",
  "key16": "4d2mydj8jSNH2ycNUDveKcQX7eoaYvCogF1jHK13Bsi2TSViybKPwSbdAG2QTPLd62JgQRXFVKV9fDHHiDunV1Lz",
  "key17": "jDxChKZLnyt4L7JVJ4P5Yboxu1ctXPwanAKcxcVRjyrrRdYCAHWsJ4FidWScMS2ud5F2JLCBxgg3cKTuoKtsypM",
  "key18": "2g18AJifQ3rcHMR1KeJzncbahJCf6RQmpMugqCFa5X5kQubkuRytog2cpvhyDavXNZETLaJpbTQfqu7W7vhYNVFB",
  "key19": "5QpoBjuhYNmDiAVfyUfmUUoGD23ocs8HUV8uMCH4j3iBShN7j2jinc7pzDRs3QzcUVNi23GSpc36UNMYLJJMDhYy",
  "key20": "5SMMufcmkDN7csNjeZ7cFTZyxdC8CNbFN5MYgHD5bjbE2BCw7TgB34Ki1ePyJx1YmvVHSGT3gekaPfCNiXmfxn2W",
  "key21": "3x7dn5qBQdZQVSx3Uk2wuFSxzNqFQW8d3hjJocymZjdLoviz75v9CcijJEEkJVkWzWmuk7D6Mqk5se5fsHRKYh7G",
  "key22": "7orQZfRqbc2A2WP5cxzAeNbxxFDtLYWP3qnoje3e5UFv3ZvzWGDpnf4mphEq3aYwG5jW2xEZD5mL19LSnLBxoSQ",
  "key23": "2ju3GRDvuGrR9VHPByg1gfGX6RFrWVEkV5h1jaSq3JTTJkW2bdw49kKobZyuwfKHPaRPt8GKqskThY9x3z7X2ZAx",
  "key24": "2c55DocYdUgFCudWdTk5aaPnFvck1PryVpJXFUvXThBXi3nuxNxGszbcTCorEuzF75F5dVP4YoD6yme9yknbarJc",
  "key25": "2HcC6bZfi9fRx69MHgVMuFTbPByxpxuYi15bPLixy7ZQAN3WpJR66Y7mo53vsQpU95qxhLAMqb9gA9QigCR9gidu",
  "key26": "5vcmmjta6uve6Lp5Ba2cH43YjNVg3MFypFn23Kwe2hjFtjc4LSTTUM6s5Zx77ggvQg4hU2kKRAQGiUFDAeDpVJEt",
  "key27": "2GRTngPycDmQohhbWRMsxJNze1sEM2nuJK4PKkEZ3eXXbprDw1Jxauwc5Q5uEZZCE5DtLEAiAAPYGsqZKFVny9Ka"
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
