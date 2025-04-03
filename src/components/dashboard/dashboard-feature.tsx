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
    "4pzBCMCKPc57mLSs85swtausFvTL27XjoYQLPNiyEo3ttiRwa2hUaHFPsxu5YtotZfDYfwV5yJeEWY1ajFkzenY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MisTQ7myB7nAkgDtZsWn2zNKWUEbszFLcqNuWBus8RJhwRkCSLMKKHDLQsAuCvGuZhjNoytJXQCB7ywiYfVMNuF",
  "key1": "4a6BBg3hLQEe95HEGuy5eCBy17G2BYBm7zRh4HBskL9kpXHLz5icVPy1GBZ6WGv67dpzscbFqNjz3uKy7xWMPRC4",
  "key2": "3PZRHPR5ttS67sCZEpnr6chwTSUzjEhkW4S1Ka3Jxswe9z236QSXVJoGVui1tVbHW4gT5PFfv8MxrnZcuRT58Wwj",
  "key3": "61oSJV5U2MvrgNr6ZPtvzDcQLjHtjAqbu2ZVLp2FNWxZyZgTxtNCieyrm51SxmMPbFq7Bt2JLN67LDTEJxbqwRej",
  "key4": "5whaBsWX1x8B75HoZpn5o4ioBsx4GQkzL7hVWByDCA4NneLaszfXev8tox1bAiJh66iX7xWhFR3nT8TJ8N6VmAJz",
  "key5": "4ptnDwe3vmrFJwT1bRGEQmqJhZXHr3dtHPLGzaPfaAmxjW64uKFVbKqZoQFw9ovxb4429wLuY72hRvM7TMHfTLfo",
  "key6": "5b19b284PduY8ysmCsQrf7CXoRk1TLEJAtZKdcqZCKmAfpJBm3Rg36zFgRUy1UzcKPUvttmd22tqw5ERYY9jxJDX",
  "key7": "3a5xckMzMvrcf9y9ofGG1LFt4FDJ4yiZMkpfHSV595aCMMPAFoXYQbQYRxARy8EdEVqLvVtGepaDBpckP5NGDF6K",
  "key8": "4SXwmMtnjP5SXMoMjWqoTpQKu7B4A8XDCtK3xPLXt9ZcsrAuFjTviw7YrEfAJ9ao8vpcNTLFXVxYi3vTs8N9cfKg",
  "key9": "43SEL5yAUBJrNqaQf6DZeWjQ9wjqgUrUi1U9ZTc4E4n4Ln3MFEUHMEd19YGioHi1yEzDB8Kc3pj9ukVyNyki2KYn",
  "key10": "5aZjJwe12Vcsx1oKue1W6sLKGb2J1ukEL8bsoun3JqnqadaE38WeCVrK4ixgBPmkAtCKfPvMnqXxNaSSCaTCUSf2",
  "key11": "TZmJJfNZ7RqugyYXHx5C28P9yS8bkfQC7GTPsQFTSDJotxPM9aD8TrfnFhbmRVpvcP16xSwhPoPJidfodP76fzo",
  "key12": "41Mv8rH9EY7iafpzNnZCRwTT14JuHRq7gjeRXqwLMHcx7YTMzsxbeGQC74wjiT2EDqqbeKrFSVBfaY5evZhjEsnQ",
  "key13": "2CwuLatDMvd3iKfSefkZxMBeAuKSu9nViZVbbv5Tun6ZhKjoq99ee3pw7BH6KayJBAQZu3Qogv1dXabH7MmNMKUo",
  "key14": "2q8vnau5CmRDGeoXicHNmc4sZw31FbWu4nRtWXRPrWeBzUDv6RKTxESPB5ViwQfhiF5TyLpz7w4jdMxdhnyNDtAw",
  "key15": "3RTmvE131d29fZtmLJj29BKvcAKyNvw1RKU9xUxp2YnENsq4e4d1Vj44Ecef6bLaX6imWmKQKuW46Le97T5pjUgR",
  "key16": "4YKJ71DsQc8wjUxKUXUmM6evJ31W4gNCsKrG2phCyYmp886yWy9vnKJhM9cz1ZqjsGKFNx39GxSyBJjmEto2H7Jx",
  "key17": "jxWvQDavduS4vppGJAhA3y4mKETC68knJt2MjMWK9CNTnBeorHrnKefgbCxsvud5Vzj8qaGdtAwjv4qPvBqUvQK",
  "key18": "4Uiju1DYABa34AKhhFFAa6tBF3BwpwMCFMHhRwNS4Sqp4irvP5f1moF5qZbFzY5Sr6RmLjYzc9kt7Qwt8AVvoSoR",
  "key19": "5hrHmmoaSFW5njp4KHv1Pu63V9KCVA7GJzqQocerqDnAGdqVJF1E4snqEKdoUa1wJHKtSnp6ebAtEifGAj5ZfYP8",
  "key20": "3c4rNn7WDhWxGRqhv3A7tXj9MBaGhYShacG8RX4NgLNyE118WsycLZbkxJkZD5qgr4qvyunpsDNNXM8Kny7jVQRt",
  "key21": "3hZAxAKNEJgtsi7Ge6wqwsiCBh9h9N8S5sixAiW8EumWr6mx8fvR7tkG2gUaZ6fv3PPw1erzr94sn7cKzV8K52Mp",
  "key22": "3B6rWLop4dbnTwDt13p7UEcaLhe52eJVhMN7SbFT2iYVxZYGFBi4pDrXzvjBnLEVivxDLQ7c4EvYerrYNVRatSFk",
  "key23": "dJPkfaPFc8F4ov7M8h7MDLCGJooVAcojs7byrQZ9DxnWotao52DAfe8L2qdSEyNjEoYNbziucTJFwrRbNjZJCHx",
  "key24": "x52r21gZcADk8Xu991d5fbf2c8ag3PE6AuTgzAUnTgfSNYaLVsroFhj6DD9Ao9vxj6CFWQJioLvQ4scV6Lwvt2G",
  "key25": "4MLgMbUxziydLV2jZJAyhYdTCB7p7EYCqu82QcD22sgJeafxuDANfUVvU8Fkn7b4q2dDvaTkwP8inpB8NjGhmfri",
  "key26": "dV1kuc6wudkPyr6dwV3TqoN2CwQNnookJ5knpUMHf66TbrExHYtbRU4ZP1PUGdLsRhfC8iDdYNXfTkcSa6fxiC2"
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
