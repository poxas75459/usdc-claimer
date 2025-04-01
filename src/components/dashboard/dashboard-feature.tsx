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
    "2FFv1Kka94sP6W4zE53J6gP8d5bBoPAC8Dfzxzx3tCfXVVr1pfy7LeJD7ZaLtQkNXNbCoCnTabQzkC2GiF6u8A29"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QqqNGFs6ooczUY6biEF4B4nKxfJ74FuVRhS3hbAjJ3H98avHbxZaGJkqjQjhBUrjfSBARHR1rKcfTNZgCcP2i5R",
  "key1": "3WKpWRFUqDnX1Mz8a2YGDBHhsATNyFngj6ZDqGUzyVamxGhTpVbuHvXqNy6eJGjKBbYjHTWnU1w1PUJsGfAEF4yF",
  "key2": "2dAhzj4Tt4GHLyD3hvUMh6zqbJps1r5TRAkkX5ArcaqtawTVVMxcM5YpfapvqRhr6UtZ8rUquPfNeTpHJyqgfR5D",
  "key3": "3XNdBaxNpqz8U9GvcmBDFuk7w1MS6F5MUHzf7m2ivnUa4YxHQxXaK1uygDN7nXvNxzNgKbgaa4ibYv12XZCY3K62",
  "key4": "2cCuXXL7H6V3ucNx2Z2oEHRf3iG16vXShbcEK8mMxVbR2iCmcH9hk8zdcJEXL5GqndRauALdMq5Me7CoK4KFG6ZK",
  "key5": "4SgTZmB9YzNuad45g38BHf854x2eiLN6pjZBtYuqnxGnsKGsbhkPGHGrz3LD1J7bzDhTbGGwVwBPAEPFLW3xcGh1",
  "key6": "3Ju2XMqbwcfdhkCUJGmqgo2PcWSMDJBG2qFK1sDMMpwhCrojWADQutT1Y3xW7PJHVLYWSq4znj6StmiFe77QFEs8",
  "key7": "GPvgmqSefyiPvoZ9WmGzBA17z1rURU3Mno9MdXwxMB45ULxxeKPMfrdRDUADLygmcTWFiZ76tqrf3GbtSnYvw7h",
  "key8": "Zw7TtZZ76pBz1ZG5GNDZcfnBtJmhGX5iBwPPWJhfpJo2qVjQGQuUMfwa1WqnYBZ69dotaHiHSh65eW5Mzax8Jsd",
  "key9": "3TyBMKJMtDS3vt81J9WfhrHitWJw8nA1ebXMAtNLK6HdJJxjxZDMgaX9tGqupdELRvtGgj6Sda1VgVjmQYVd7Xn4",
  "key10": "4D6vZhhHwVnQPGEFwpjtrLo4F8iFRDdH8cLhAuFPGmc4fEcicovnTDBfB2zes6r79Csifodp8hom3ENgsJcENeor",
  "key11": "3MPUGt4RYia3cxojBZkUyNH3adhMbdrTtrpWnHZ58NwQLht3hpwgbJBd9pRndeHSkaqCgeoxYi8TtgXTf3h6UMcP",
  "key12": "5sfo8pZFnUYK2AQ6EteDCxTUquvceMomVBsJCsSdF27KsCGmsZoGBCGA8TysexU9HRqtPYXkr3mmgFw8q4fjRScf",
  "key13": "5bPQNUaH8y3bgmwv1KVgyuqLR4KiVZUDWreYjxqEQDsu2F71sUbxzPvE4sdRg9addPXUyL1ERytx8JyjaUPnxgCJ",
  "key14": "2sZEEzGW2i4SjrwPXKtQqc3NTMN8kfbjtBNUxFGCV2ELyM5YwMxLXP8tK6veJRrJYRSBDnBE8BPNRL9KJKVGJoeu",
  "key15": "7hm4bRmdNyJ6zhAQTswdiU7eZiyxbx3FUCFf5v96ezAeAFJ2RhyeQeiX6JwhRXu4jVXSZUpEsWDMES3FarXvLr8",
  "key16": "28TdAXXXQkrGsRvyzD7h1nkb6gjQdwC6arWXVzisxoMgNbUyWibRtrajajzoCt1m2nLtYHP2GF75A3gHJpHNK8Pt",
  "key17": "4s8sHr1ERbP8muet7A1NCVhbzj9HjnJWK1RPsz4msni14mxQACBxk7dgoyMfDP4knHAMuNd24hxDmdg3avMCz149",
  "key18": "54kPfD64ioFKoDyU1NqVnrbWCXEZ3CC7GQcUwJQFdLdZEfEf8AayCyshsLbByrZiTvCem7Zr9wZUZ26zXjh2mhNE",
  "key19": "JJgqkmfYkGKRizLUWgF6ejQmHcojCAec7632vudLvpLqjS5QcHSPMCJPA3DUSogGrCrVQ4UxyUFjRqUyDh81o7x",
  "key20": "395xtwuYq5ropzcrBrSK4zWmwsJ94H5c7pv7zbXyXWQZsThovfceQTkXN4LRuBoG4Q34p2hd1ZLnG3fCS6ov9v5D",
  "key21": "316vsvYrNQTcctHws3xLUDjh5tK5me1a8ZTP2o4yQDqiGLsZzmZHaRS7DvuL5k7XGAdyFhgxkLhrH9mb22MQdQQM",
  "key22": "4cnpwQGdRWFfRgKL2ZJUJzmaM8xnSvABywYJnHta8Nz3oC8TLN3V81WFNg28gZpTjWjMGnEMmNTUwXHrNFyYHcww",
  "key23": "2Li6C8skivFnrjZUPcx9Ht66iv6BXBG7vdEgJTPYF8fY4aM394Z9vh5WKaXjnKRMs7L6HWCck1vgV1pGPjAr4Mft",
  "key24": "aALZJuPiWw58VF9Utarjp9c8og79iTTXH1HjznVknzKvczhRK1kkx3eShaKPSd8iehaUoBet9UPPMExWzJk1Mig"
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
