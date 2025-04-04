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
    "2UyH5opKgjGRsrcxaULYXvHehJrUXaUHqYjGTsKDM49tLB1afdtCZim1kS4GnaVZ21CiNmBHncng93aXFvchAQv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qHKenkGgAkqKQCgyN3v2z6e15QTNgBcnK5vqodvvv6djLae3dy6vysXPePdEE8E3umZsgV9xDRpGPDQ4WmhiZER",
  "key1": "EJoR5kQKAfaHo6YX4Lt756oBoQNUfhpZVHCtPaAKtr1UfjG3KreJK4YkqJ9fSAEZgoXRax88z5DZVx7fTa62cJE",
  "key2": "3Qym5uz7AYYE89cYATpUVZ3ct5iQJgvdSWgaMHvW754tMN5vQBEyUHqHqnTqpm2TdLD8TXbjQP64er7Zoo3RQHz3",
  "key3": "2CXCN8AWW9NL8YwPkAmrpActpR7okFeAF4DsTUM5c3o1s7VpTQCUr6do75rZu2JDkKivzp3PNbiaxm5xXhn2uxhB",
  "key4": "43DdJzateud71NcYriFNwmzhCkTNvmewcwHwRZ1FGjimpfszfxkrc175NV75yBuZKEQqgnySKbYbzW13gtC7o32g",
  "key5": "2ErjQES4ZLEDWsy5FLwscgv65KJseUHS1D2w2gRVKHwToZgUxr6n19bhKN7hFbPeH7Px6i8Z9Evx2kGyqioUcy3a",
  "key6": "2RUG7pUor9BfazDG86qJe2dwQpQiVfQDoXQ4kNpuGhZdey2gAP3D2nAHjTHubtPqYMDXAKXvcga346t8rztpGFL9",
  "key7": "4395tychsNTH7fqbtEY4yBwZ18DqXJAethxUHuEr7VsqvJ31kANLyvgRpD5ajxpcFpjP83JYEmsprpHKVn5AQbPj",
  "key8": "3dxEz1w6LWVSywHSze38spu9zGa6GNQ1gQ52f5jGW2eBC4pKxdXExbcKoFA3QfD3BDhubputhRZm64vcMKTCnFpy",
  "key9": "63nkg9zvBKX3jAGesSAdNdgLfhJjfqSbgA5B15zQ89eFtKi9ZcCLUt9N9JQa8hTmjTkj1EigQBuoECN8ytf4Rk8c",
  "key10": "5jDu6y32YAJsDae1BjVhzeach1hUmvA8odNwye1t5qBCNAVLjwHUsRFzect4V8MKQBn1FGYyGyabpHuqdGwfoQaD",
  "key11": "5s8cib4ynge59PXSBwoZ8TWTLmTdfCPpVqbmjsoiukbdMRJhSLKi4VkEYaxTw2KyKHAdWVVVuryUDJJnBLkXSKTE",
  "key12": "4ihrgJvAjh94H7DJDDHzJ2ooQz4WxtKkFQr4ocg4HJyaJSfJnogNT5PE7DFLaAU84oG138oC7qk9v3Ye4JStWytg",
  "key13": "2nkQL7rCL5Z4EHdhpUxhWgQUumZ3Tt9xzVUprMmwKCZ7wEqUHFw2pGfiLj13tm6udF2NMPJgimDPFFz6KXhPn3Ab",
  "key14": "5biwgwd4MFQwXquspBbYFYLtt9bcMG1UaSZ1ZUEiLYicX67kRyKopPQYcg1wkZDLq2TnPFdMYY3apsFpgkTWkxdm",
  "key15": "3Zb5xc6WeBhLZiYouR3aiMVdoFFMoivGkGE7cE3MLrUbE7x8hdQjRTm3GLa5PvRUtkoj2zUFAcHoRHweR4CBhPYS",
  "key16": "4zEjRsi9we1SWFpntrQA3FFUjZ5tVLgpBd8D5zzNRp65hdZttspJjm8H3d3Bbf9WdQiX2kEYQuipFws2cXTtvpyJ",
  "key17": "2ZTReUCA1urodso8s6gm1RbQTm668VCsfqQf2ZH5LNC2nTfqHVFC1FuajUj97jinQzuayE6XmBYjNbWpiXPZBnKz",
  "key18": "4Fi5BHXUBFtGWQjEukfZvXdmaTSJ9c9qeGNv2hSrV9uKPZuZe5k2zkvoAQLsPCc6SL6wwUEXJSyzzbbTVc74u52L",
  "key19": "23Y6VPXi4wk2VaeBkhiqT2aD1FxZbr918js27WWqPqio9sHXH6BZYeut2nu9zYuzTrXyv5eSK5WEfkukBHvxvbeK",
  "key20": "5FwcXnqicDDzr3d2GxBARdgVpLC5VVVynSfc1wSS8pFFNQYKxN26MC6ZdZhxmdQfKY4SXsv4Z35csUQ8uNKJxgPE",
  "key21": "124BSBqUqdwf72xekfMYRsfZvBSuiCraDmVMzSHrmgNrB2B4esxztWKRh9TnxvAz8JPzBBWZkdGTM1xwWzW5uMtp",
  "key22": "28umxoaAQfJbDUwAVnpSBHN3BnUE25bQzg9yk5To2QFtkTyjUkB9XnFxZne1QyJzTEpPvTHhx9UE3qvh3jBJ2hnQ",
  "key23": "4E6h54ujAb4ESyP3ryjvNb3p5Qf8RoDo2MvHTrS1ThEn78tNcoPd65XG21o6D7FETScuYxBbAZav3955h8hhqtjk",
  "key24": "38EWqugYh3fjr7V48VL5hPvpF95w5V5MDvSa2M54qx8P4ucpdpSdTqkFzo7XPnFJEShY4fNfrcuEaNTsxzx24KJy",
  "key25": "3urXaUGf8RmTs2Yke6qd3YckAyo8QeD4XVceH1mK571mL1CbxRCk4Vtu6HXyHaPLzzn6twzBdt8HZeezSnSFYrSe",
  "key26": "5W3caWZjLEMBRzTczE76DjadJtZQQd19UBSoMQdarFGPKCApcVCnWzbsseZ3263oKu6DcVsrVV5PFiciQR3C2tR",
  "key27": "2xdfZR8DT8wBNezKXWtNTn5icGc1od5xeeuXvMzQi676b6XYVzWharKpe7L8Cagnt9ACJVeKtvCAJzqVvbWxKqYQ",
  "key28": "3fj3nqcNJCT5bLkvJraAhcsq4erR6M95h1WSd1o8LGGiWZN8ryuJuNy3TBdq9kASSDtAgZ1wdyYiDhTPwjfyzWbM"
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
