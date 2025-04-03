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
    "FiK5UBZT4G7z23vEtgugEB8ffPXcAzk2dJKbj1gfVaMuVydbhij53Sdpvp8hhqHWe8No3sczDhr1CBD8a7nLMi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tZtN1jzkSGEgiZbYVLGZQQzQVpMoTA1Fyt7fhUHRiAMxCx5oWsxFAKmRCspY4iH931BtrnVZeBSW1fu6xjCVFEn",
  "key1": "XZBxgr3kX441dXv9pgShFT52cZAiaRVXmAHWWeT3Yk8iWifjPmoS8MxpodCDmXwrtBK3sAbbb1UcXpUC6SypdBZ",
  "key2": "4PDMd174gme7p7tTH6kFrGskhHJX7Xotqx7cX5wiMNgzfQuJG7AfTv3urxQNzEVs4RrenLMmSHDbncRQ8k51cpgF",
  "key3": "47RPzUNbW6fP5T5Mk1DjGi2aUHJcxNQ4AhUVBmVv2FeoxaJJtQGUbB5YQ5KojRdxgq3NxAUB6aw4Vr4iZ8LYWrL2",
  "key4": "4euQJtt77cKMm21HcCyK2BiAfZxP7bg4oDzYNVaW8NwjUd35odHNHYVouRRP1D3nBkkomv9x8BUJvV87qTWyxJfJ",
  "key5": "BoYFLZD5mWRgKURpMJRrAZqf2biKNrUFwVyKWac1mCQQH1B9BU4SKEjhQCmaZVdRHSW4zSFQe9WQYavtAeXrZMr",
  "key6": "4usdmHjLAPCpA4cMzL6zVawiGhtkyGy4gReXW19L1p3fF1uCizeiYzXSKPyULZk8TpDfTZYut9c6ZzA7pH8angH",
  "key7": "CWrhuzzoh1rPxeYeLuT7hyCjhMhBY5pyDpXQ5K1rfMS3jSZhGjrgbea3GFrf2Y75nvxMGLcUSmGYNwRQK7QLGkG",
  "key8": "4eJtWzx4kroJTD7iNXXgxe1uEekTad6PESByRzjdqXJYHC3aGDbXYjDTbDUFoNjUGGBJjHkeD8gPiHRqab1U6oQc",
  "key9": "2Kk8F4uxaeNzA5kh6Wf4Ea3eFCSfjz3ut1UeGeHh4Gf33KNBX1SaG2PJcrDkfPb5h1FSRVpf1yb6hrRX89dJhz76",
  "key10": "3vZ5izAXucRAjuiFGygDjtjGFArbCCJFn3Pk4B5VMsphnkwGuhWBgSFuU9N59L2aWg4CgNG6QUctpXipJZPQok1g",
  "key11": "53Z1zvaPaw5AjxQbppjD5sySHXAbAW6DNDMsecKSDQEB1tJaq54pyfLvbRHxZKX3NXqrv665RcHLEMp2XUHdTBMT",
  "key12": "43TjdwMNN8jNWLE2UgPeymVrZfCVx6QdmeS8GhAjok7KuicXh83jQQUACUDYpd5YdaXNyNVvypbCAuwPe6avjuNH",
  "key13": "54J7xib5uDvy3kpALLNRBPLDqWrXDXqUNVJXPSyh7gVPWxH9H4LFupfKLiYbE8CqKrr6Ga5EUTAKdwdi5A94Lv93",
  "key14": "5wkbebeYpQAjkV1bqHyWhcaFLy8UFexPWkP5gFJANjJCQX6dNJmUNTrcmrEoWFADRrqpZBTSGH7DfVgrHUKxraHP",
  "key15": "4XJJ51fkdbN1gQKD4YJyncXnpdAfiSbvjfPFBLo3WMY2VtvX349qNwB4tyXbHHQgamsE6wky3uMH9JztEYcmnCZq",
  "key16": "4GF42ZmEVwpVqnQHEJ5wLo3GZgjPDBCZHT9jS2efaS7zLAshbCLitoGMa7kTt6pxSckuAeDb33E1r3grb3ZutCCa",
  "key17": "4o16jiD2myvC9AkcL356Qyc3ZGFwAthVj17AfBh1gtGX5LZ6b7MKiTkE1b4v1Q1E2UYytgsLZAr6ipBM61LbPxUZ",
  "key18": "4Y3zXSLbr72ycBRMhN95aqihFurGHNhhu9wkmeoZBs4EPUwtCjaeocbUshdMW1TwnYjvHDL1jtLaG91p983mPA7M",
  "key19": "4qcGEphytW8bRuw7bUMSo1JunZkUrr8bL4sxpHKucds7zUsNtdN3Jj7eBS7i7JLTWU1hTH29Lu8tqVfdxRqN3Q34",
  "key20": "4PYZehwA7jZRKGYWALKfdnH22Y1bH7yspLgRFESU53knZBrJzEUXzw2pGRHP2YuC4idrH1APgFN2LP57MVyepbBk",
  "key21": "iKrehzB3zhek3orQ5UrQdDWSH1iwXxJ3rd5w2LuCKPufii85u7dCqu6HgyLxdsq6gBBu3sNn1HViNHEjoNvfjqN",
  "key22": "8A4djmDjdcsLoGztwnxbHvHUqUuqc6wSd6oMJ4M1xBAA9oBJUjTnf3gJNrDn6RWuCVsK2MXneFSxiXbwaBaur4Y",
  "key23": "4PeMQSANTkn4dUtfYbdXucUH3L8KeTLCjtfT3hyJH3AX93d1Z3CgGBwR3U3x5sfN4F1hTsNs3mdoqwhvbUJgB7wr",
  "key24": "4MvRGfmZABqqS55hP8EXumEL3cParFFFUecNquSPU9Rgzoi9MyB7WGwSqyMMHpoNeauQZz4NPEj2TxFR1jANeESw",
  "key25": "2kNNAMPkwBwZrbT3WgkEdDb1VtyJU3R4Sh1LXTf9sx4Be9C8npRe8TMJphRhn2TQfXf7mUdibpzmsrx2cRkNrcVx",
  "key26": "571dG2MSZ5LtwnwuapSwfgYCitzBGT2PbJLqHv8ZfU6Sqz8Kp2GUyDnBHJVZxCu2cJ5yNBnEms86a2ADotW8NeJB",
  "key27": "hXKedsb2KsFsn2NfBvTrx4XxR6SyedCFy4tiJiaZsk3D1v6L9moAszBAnmp9cuiL482jxh2VSRJkvwpVFxSsr2m",
  "key28": "5p1NSakm65wg6caCrkYwP72aMhip3sMtFk13MXHvLq13C5eh8pnoQHnrT6GUMa6Ypp4RQ8SCBAsue2BTTSLwFnko",
  "key29": "4ocvA5mugioJ9xjVHwvs7pxTfginHwB3oa7BdTbK83dYy9ZX4wWir9ntmN8WqkjBiSkFYcWBHUY2kawrokVXwVTw",
  "key30": "2RewNJrg3VK9FqVnCoZBgLFLa7uJsSMQDG4Ssfsf1gYFmQhyR958fnKhbCtLWt3DvCruAv9cvNp1VWackVM6ftWr",
  "key31": "emHN2w3mETTMr5CsYKyqcbNTm1MWUDSMwggQ8bYTH2d8R7Pn6mgN6Ujd1JJzaDaCP2ZU9VZp3c9BzPkPkciScnd",
  "key32": "2jvpchQjRJdwVakHL6ECrUwJj4VaYVrMraiKESHyMQm9kj1ZoFXW3LP6dzXtWMFxDZ3tcZJhC8Xie1S41Pek791n",
  "key33": "4Lv4RnPR9EygRq2rNGMvEqBgoZu1pcn94PaNnMQrtkCb6zhkjJ4Ejymfg2GSj9GHhi6k36TL6NWG2pFz6HyHfUap",
  "key34": "5Tkf6xBDuWjqUK2VyWZZmUFtQ9qYAVUCMTudSUUAtXbrmYUXeXHMpzv8xLfwiDNxzKQHzcU4643GqtcfZMFV3kUN",
  "key35": "4y8zwTLuGXNAFPRe4eU68GN65ecbArbgtagiNy6WyzHbnjHrUeTUAsgr4nMCXkFKzhukZsEgURG21NRU6af5Q4YV"
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
