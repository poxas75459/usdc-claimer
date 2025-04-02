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
    "NpA3Fwjk1gsP2mpNMxk58ZCamrD6BWoV2S5Qqoc6AcT8QRe1AMqu25oGXsUBvg7MaCJ8B2rqrZez3rBNvdSRJu9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Doi5kq5NTZQgo2CgXZYGdmVJRrmhZXtYseKaSJpnerYmUukr4DSZXHnqMnNS5TPEUUcRxL4zAgsLKQrDfvEd7zC",
  "key1": "r5uUtqbnpoMhiQ9dZ23mZinGfNpm1KGFnUFxJk6ERgSdqr4eztUccLjH1gnwKpwr9LzgtotWuxKvURMhupne5fy",
  "key2": "5oC4oW6pFV9v4NRkn9E5ZzcUmZHGRfuW2BEheU2bxRDhGyhWvLT3Pv5TGb61iv9hkMFpikpF7Pas6GDraacgutbr",
  "key3": "KXRFjkc4SveKVee2o8FrQXSdrBx9UMY6Mq1jn5zNCuK5bWuJLLByR819st1drViWWintMCqSb9bDTEPdsmJBHkr",
  "key4": "3LpkvNjHPjvqWYNXeBbMj3z1vrQiFe3nLcBHF4dzu173XKU8djgDC82SJWxmLNAv5jR7edULGefV7hn4KaJcHbQf",
  "key5": "4G4pMJhsW2mA5L5z5ZfDtY958882EyNc5WVnZfNp512Mmu2q6QckgEKnNocAQU135UW3QeWjqHA7kKhvo71Yo8FW",
  "key6": "5AxhiPSYAbKFHtY19dmnvyGhc8uWmuSm2s5b43hs7wBQcL5gMfGNjpTzXmC9Pf7uk61hwSZGZY6mYVEJ2R8eMqpe",
  "key7": "5xJqtS3ESnfnoG8wq1GSM8wWd2MSs9dYUoHLTKA8qxjaSzSzabUn7MH7D2UJaVFwarNsmRRnVmVFyuXuWhVQa8Vh",
  "key8": "5v1h6GFj6n3iCdvM5jwQN2vWwiC4w2PVW9BJESom7zzQEFS4rsMHjmBahjVeLmcBoeTZGJzmkweJUnc4npEbNJ5Z",
  "key9": "5eCfcagXh5bHipyWG7c5DLrhokA4EShWNrn1a6EAhnbnvGJDFq4UBxCSMN1m5Y6o6BiDqEJ2nS7WqZSb83SFXAAs",
  "key10": "uT2eeReDNzmZUGcWHYakf6EpFBTikHGk4H2JkNaHervESgiBHLvEAXDbjRuzr6hQL4KtbW7H4VcDew4HfYbkzTg",
  "key11": "5mexNyQvRoPZmjabcawSorL2mDbv6htnEWh2BGJ5cHgQjY3UGeunGy1Hhgw1NMnq8APZXEgYJ1CQGbCJBCYJB6aC",
  "key12": "qDuVKRprXMoWNRciQszXWmbKPNStnVmtvkyFrzFHy8GTk1NboMvZAZggmyVBsaaCYEhThG5BMS1vA7cber9qutq",
  "key13": "gPkV3dck1fXJq2pedXzJ1BaAPjhZ1kGcJt2iC7Z2nT7b8AXebZ37kgz41RirdJ1zuX7BjrqCuR6kFevRQ28kYVL",
  "key14": "24b9iM8tzttGeNsxxVqYk8V8K9RysnqFcKhDbuHMfB4FxkiuVE7VfdNyYusj7BWf7rrjeQqsJZZTPGUS2qu9d9Ss",
  "key15": "jYmqMtc99mN6v8JwmnEe8eiwxcJpUZfKbUDeD5AjwV6sxVbQJq7tmFgxcbdfsec7ovvcKmocKCv2DFAww2j4Mww",
  "key16": "njvhAt7kzZfVzdeaFnwt7wucStHH8rQFnPceFpdEdYLTdmvzTFm2iTu4Xnonm475zvUaoaBEF3Hk7FZnTmxmLPj",
  "key17": "K7LmnMmLtCm9uLpWXUSERwtuAXePbLemtKKUGhxyQZnFdjYQxavPaNzThAtBZ6m8vrwi8C1nwjq3GCpgihcuy5R",
  "key18": "63LVnFqxvtvvoQTnCMHxe8mK4jLYz2FvdxHtxN9mWSBeURhMMn5B4HhHPWF1EamKmG7dQbcJHoZsgp1aLh1YThGr",
  "key19": "HdTz6VtoKkiJyKX1Q1jhnUt1HWAPQ7Yh3pWdBWopF57tTEHYzZGQJUg2Unra6FNNQ23siMukYstidjN436nafsR",
  "key20": "exqQWc9Q7jEqNs6AHZQ9tA9eYyiH7zdoTNUTeCNzvtmGNiFjX3b4VWRFenm68pa1CSwU5n4CpqrzSStbRCcDdPK",
  "key21": "2u5u1df9bHucteLKBogDSFfRixKUVAG1zmfBMF1DW6zqiATRjnzZLRQGEAXQR3EQq3BTugTQa9uqpF54D9eQgoVc",
  "key22": "3nXW1qxCXMdu9uEBSJ1k9DvSq7JzWu8uo5cgxS1citqHTtikhBNuMyNgTGQdieqWGmN35vTt4YzN6knAV4SJvCKD",
  "key23": "3HWiZortPYVKigqxpEzZgp4kxJjVrXCW3efy8hdp8SQZfrNQ1wATqNCwLQnAf6W7SJmxiAkUhBT2uVwe6qZ9Mapi",
  "key24": "5bgCkGKP4TfnU92D9GLRgK3MMDFWENRf7QS1isvKk6X9ZvLNRLG1YBh4k8UWpLcxtsMQZkegM3Lu1w6hm7ArQQCh",
  "key25": "2MqHq3s1zrSqfmnsc76ZfrDCNxcFpHGeMXJTLNHexUSSjHFRy7LGwUN6zhea2Hth6624VG1iMQt9U5wKonVtmkuq",
  "key26": "5d7cjjjijqrnjFvBAcpQKHTfWmX2iQ9RpmQT3TrEe3yB9cmMhMZorceRzcL8AJwXNDjPkjGTg3GUJgncvUv1no1r",
  "key27": "5raMN4EoT6VqqGSpLM92brNrw2BoRTFiJ8oe5zkytrgWUhHKtdrzGHZ4WL5UcZ8m5ga2UoNY8txV8oeErief9a5i",
  "key28": "rESX4geE2xwDz1UuBM9pjvceJYd9yAdtjHPcfbePYtVHGtdfmmKHDKaHJiarkhqEHoWP8oZ48w6mEdHTjwxjuHU",
  "key29": "3pj79z43sKVyPXX6CYTLtsvF6k7bFrwFupVuFdy2MiUrYmSzVxoxtbBht5wtS8331mGdvEG9dKcEq3dXtBPDDwe1",
  "key30": "3o84FpS9jzXwa4ArGiMe7m8o1LiFru8WuQ2VetoTsKMwFS7WGczkk4zzh5WfRCvGbPxHDVQf2wzPzN5Ziwaahfy8",
  "key31": "4iz8RSc2AzRM3UUcqUJLLvrEs95CN5T6jZEt3itoPDT3R5gWbstgWyzPiK7F83bE1QeDNtgzFyCuHiEv1SXqfyWr",
  "key32": "cJcKNqqcoKT2tbwghke75yvT97m7FLg2qaUdSBJAgYY3tdNrGvNkfcnET4WHHJSGAZBTa3nWxgyFjCgAU3TYCsv",
  "key33": "3ep98S5pswSMAWRjZ3kV3X1rUJPTkTQQnnEHbqW2WdYHeNRzzGTU5Nv9mjV5qrG9wtHJ3AFwWN16i475vNpj3rXQ",
  "key34": "e1GVzAVn5dsYyHNmyGEuWQo6NvfpmcX2muCD1q65j4kPsZoLjaPLPzRJNQt4QaPVtTZTxChQ3uz3MQJaP4vWqAB"
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
