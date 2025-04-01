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
    "3gG4m6VXHkfQyeE6hnRxsaTmtEZ6vbgBP64HPpiW1o7HDBDrGFvzk5YKUPd37VisohjVv734C12vFF5iSW3SziJL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iEhBNVzw294TTWdo6ERcdhnP7FGcVauMg6R35K9khKmewgQN6pLMJggU71YVSTNEjaBEyeSFehmjmYTJAecm52E",
  "key1": "3s2gTsRLAwotNFGHDP3SZbHcbqcoQWpGvsBdnMfvPhZCRSjHrAjjYjhQ7w4AJ3ZMNTPkmtdnE8SduX1qJSzCozM4",
  "key2": "5RgiE7Ef9B2Qnf5mxdVMDcNPyNxTEC9vVdWUcjaHvXZWocaKtA6njqPMcQUXR7U1zAppk4b34r7pVwtGJgtXzy9s",
  "key3": "65Py6tYFXx68oUgouGDHKPH6P819wvkf1WGZzWJo5vLDhRd7NPGFqAaCs3BZNxKFJJr5VaUT18GxEfkRoyPHWSoQ",
  "key4": "323drgFY1xpwfRAUGuzXy3XsicNmHDPsEBmTTy8qJ6zn5sn8WhKJoSzcCaUNoPoK9iEezzZeeFGvjKkmTMW5RX2C",
  "key5": "5Uh4usjhYUoHsDsJu3tXuK19omKA2TN5YeBD1Lcvd64tssZ3VsPqpLFkkQ8oH6pVwyDcAYFxSppwieEvzw52ZK6R",
  "key6": "5jbpiq7FrAg47Drc2xLCDXBxmMsxoLvZEUs2nrhYYWfieQjVKBoMqJUs4MiTRz6jJi3HPk7F7mirUHnVh66F5NHv",
  "key7": "WZadCLMttmSpcnGheoqFfjwbm9CzpuAE4vxb7FWP8RNoyosdvJJeHkJXNgFmpEgVZfMPgPFs5HpfZhNwxCnDBCd",
  "key8": "2gV5X6sLVQN2XLbZgztAmsn2ftbV9VQDDegur6TsXQE1vF5xFSHuZ6X1tWfw1KKQnx2SwP3Vt16MK8xhRjHBg1tG",
  "key9": "331DNM3fWVmaMeDfKgtmby5Gd93zzSTiLDu75awEijuh2zqvsXRp7x1K1w45nb6aCDcRBdUcopabJ6qpEAemPFBi",
  "key10": "3FdWu1sJrUDJS6YJWUyRucMR5Lk1UkLBFe2SMMecn4B7WQBM9u3qPR1gX3AkTQjzr1qXeEwW6xapEzPuphXC5b2z",
  "key11": "s67XdrWaAUJxdjBW9cuPw77EKu3CLcRMVbSP6GiFRrSe9eks66EaFkWEE8CDn4W245TyjJ663QezSQPdgXGsoos",
  "key12": "51ibuPCLFiDRAEEDNfc1PcGEMadQsSevR83B3sWNEYgQvkfUYzuuTYAfvR2MG4oj3rfdDqy2vQwyXBaeXJ4Vsn3f",
  "key13": "5uKcHFpGkaB9ET7RUshotB16mJmULDu2EHF6ErYTEFYmSa1uR6HWD7g8rGYcQVQcxVWStKJrYfURnXAWueCV7p5W",
  "key14": "wrZNBwffcs7nWLNrE1hYo9wfahgoPnsp2YLhapsYYkcQmg7sSvsUcnBtk9ZUP2x9mQXQ6ePJAPTCSQCWT52ytvN",
  "key15": "5pKSvuL35nkc254z42VxQJ6XxaEd1aVR1Dg5oAChWAa9id1aW93Bhdu68FPYZke5hMS9tcKS5AY5nc8d4WTe7feA",
  "key16": "5ncLf3pSdzb7VoYUZYRp4aw542tkFwM6fHxDU1X7pd2FTFYwrsqMqpbqC6igMqA3Uog6TSoGuhE2WdVNhW6ZpNFB",
  "key17": "638kJAY7bQKa9xaJX7Kor6dBfys4x7w6uh6Le8La6qhvuieeen1NWpnXcj34F4z49vJeDBrQpvtSJ4km76vCFWDA",
  "key18": "3eJy6trJsdtzR6SWRSuTnKRLtVUkGST3x1aNkZN5E8EBJchq6E62mDxy17hCwxr8BMZDvuGVSdao587L2Wh2ahbu",
  "key19": "2DeyLTadn1U1kM74S8n8aYoa59XfhQpHJ6QSQkNwRG3EAPJrfMDLz4YPdASjYT2HPJLbS1iki8rZgASf559Cd5o4",
  "key20": "4ZBqr61CEd6ogmHQPE8GLkZ8bP24sz3h5KBSTxdr8XxksGbLEzHaHyMeWo8hY3XXbAoBDTnkPRPMj5hqnbMcfc3g",
  "key21": "2JVuxLwVyETpPgdJVEbb9mJVAbFSPYY49cvsCP68sLh7cUvYyc41Nkq7o6fPMAQ7ni6YPwCFAMReCnfpwW59SRpM",
  "key22": "f73bNNV27eE1bk2noLK44oWDFqKqyoe7Ky1R94qP8YG98JpgW4ELhWWeRaauJTSFHMhM2op1uyDYbsRpxqUhDki",
  "key23": "UssU9JDrWnREA4ZwhWHpBC7rpVHt613MXqHPKNDbrsrXZpKLQvATFciSa8m2mkXb1EectXttTwN8NgHKjKzAtFk",
  "key24": "3mx7rKbHNpFG3nQJkL7NscMScKcavL4oVGf5ejphhwqTmwXSJoZZ1LdYQugXLJm2gMUhU2wDYWzSv4TxpzZHUdgf",
  "key25": "EKwUf1TczGsj8drMwe131RibW8zrSJq89NtKKA5MJT17n7VeJk6TrdkaWuBjzbDc3w724dymyfeFoovyj3THG4r"
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
