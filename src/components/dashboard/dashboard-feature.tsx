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
    "5gjm7gpHSU3udoytKFAy25mqgXXvTatPezcGPAa8LzA8h36LvNWuZVRqxMAQgDLZUXhXyXh4zeWyLMiFVTaG2Qmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MvhGVqL3Bzn43pB1ANKqhUn6s25BMeqZnaA1HsjNR14w6wfNh1tiREFiw3AS5hPm78ibTgBhRU8pmT3oQZKQe6f",
  "key1": "2vxr1eyKjapDoEuhxwpJf6YxYLLBD8UaxghksTS1QT6q84LF1pA1km3wBw8maPvgD6FCy4ANYZ2NfbcdoPo6MK5K",
  "key2": "5MZijKXnoFUcypDtHhCKTtmLnatdohMsHhUbaX2VjacndwQwWXnLuqVJy2JX8aZMdNj6U4xBAS9JkPma17WSDhM8",
  "key3": "5fuXZqTQP4dJwuyVHqBri9GsK8XVxp5deT52phB5Y7adKGpdnSB2YxcgwcTY7Gm2GGigeaJ6HKdoiTkGdzjAW8Wq",
  "key4": "4Zpscj46V54jy8YaC5XxFZoBif2v9xWDfJDqBK92x1eWENVjGAfSdNQnbrtQK2VmDuDNKPmEbsbEgk4owTht9PW3",
  "key5": "2YuXu7C3ut52jo73pmq14qaKepm4eYs4tDQVeo6bHwaWibBs4B2wc39cWoqbtuPNrrHXgFVgxy3x4gjHXMqwuVNx",
  "key6": "3DwvkA6E9Cj5jg55MWZHFxb67sjHba3vrxPDcGscE8MDD15UCPbtZD6iu327Fj6LHTs36KJAWtA12EepgK51K5Bj",
  "key7": "q3PFQGNqjMHAujSRFfa2iHnkFubVPTxHBUBXYkfLBo7o7tdBghQeuYALNAYjjmc628ZGgWgyQKjcwjNohmYC38S",
  "key8": "3byfk88Yxs7WbjCnNEYxMjjJSrfwnr4E8sQ2mCWRDc4FWCjcCcUnbLnaWYJzJ8wK3o6BHPCvSrp9dtDjZWjfCwRJ",
  "key9": "oHMz9HQFDnhF1Ubp74NgUAu3YErMkVHwzQfdAJpaBYi2wdJJnPo466h1x1cZ8CSf59v5rhszeyUFogTXNjn95Tk",
  "key10": "51piDmM4TLrMQWXamLzbqj5vqPsLFsVbBcyNUkBjaKX2B9aTbnrFPVnQNwYwaAE3XfM6GxHT39vJbTxbsyAHdVAM",
  "key11": "EYyNVrscp2mxVjtwstkmQpcFAA9PGQSAuXAt19dDZpp3Tc1btJiE1SfJBCDnAMJS6ezVuLMjFUrpmb8i3esP1wZ",
  "key12": "2HrW9pegjSB21uTLMzghkMVhyexhT8aAb6KWnwKVoDa2Rd1T4Ef6ooGvhTzdTNaptbDVurTNKkWYEueCvTFpRLY7",
  "key13": "42HJBrqPEBqRJGcpoiRfba7CGGGLKNE6QhUKX1VNFotaLXj5vwsjdxXhVhUnFkmRHyqwLfmus9w78tfVkozs8k4p",
  "key14": "3BuWcc6synB7ac4QHka5YjKhTTggRL5wRbBurAXn8iFUCk7AodkuJj2kRoUQvKVtt7k93xfJEHaGUDDFju8J99JR",
  "key15": "3GxXzJ77pnPXeSJVeUWWF3HmkiH867SKWHb7bit8AobGZTcywdwoptM2XHJK5k7g6SvWnVsYrzVHspZeaz8SS9dq",
  "key16": "2uRpR8JUKYmzKiHwzM1h3cBjin5c68LcbV1BhVWnnccu5tLKeqv2ms6RhakkGpK25MYMumFQWgiHztarwpb1jRhT",
  "key17": "4zHa2nPhR9JQKGyfxrUR9viC9xjApkbC5ArRfXV83YbE4w7gJissdQXzKneRaLpuUpVSLkKrWKdBswiFvAE1ZgoM",
  "key18": "24c1L6u7jidJ6A3gCcinoXG7vXn6TJayU6Ta8JnAwqHNZhezBBCxm85kmCeaTsKQVTcbmyzgsJ9ZAoQChWkHBxiS",
  "key19": "AEikN1Rw3XqpEjmPMp3CXyUZgEKosBpAyn1S8rWV5diQ56RZyZQqdDtwe4r4NWAB2nLGHppc8kSWx7t8WoVLGLV",
  "key20": "4C1uWC1SLyRsgQxtQXDqBFQ5MBtNTGMQMtrjMe414HqBrqTzBKPpFRsU4KyTNvUuk3KoJzEfpCCHdSgcGoiQmi8H",
  "key21": "3EQiYyFffpntMkW3NtduyJRLNn231KmLwt1EsdEwh4k4Rv9RNwyPb4sqPrHddsxMJGfZQkcr2S6H1wXCpA9gDnoS",
  "key22": "4Pu5CQUAJ8bthmDhNau1Jii7dyhYGuLL4V2yoUDwq6ki5PSWJqArxSWdufrkouRCcxdtYkNjfgSivUav7MtYKBzw",
  "key23": "2G2uDZU2CFjHG9k7vDMCbz3UWR5CK88Jn6i9TmV1fRPZ8xECe6riizCsM4b6VsjGrzpKSYFZ2ZsD8Q5CGZeRw1tN",
  "key24": "3XnrR6WcKKFi8UaiGmTuKzDuxZTzt6Xw11nE3CypeYfGRcK5DJcJpMaVoPcjg4MLY2CGsTV4rvwDDYhAaamqa2wL",
  "key25": "DCuPYp4gCuFLicVTKDnuqMPSmDtbvzWh3MdDcHnZTGts4JsfEANk8WFW1Y3HRT2PesdR8P9atHariCsNxu8zh2q",
  "key26": "59YzZNNmGihipM4iYiV3aLiUdp3QHAcSjJmaKViS8QBfqQenrQcP2pYmHqRgWxERQZJ5qfcMiuEc6ezTdhSqn76d",
  "key27": "3uRtLkqaBAWCDbF9v7CM1FjoDyjG9Ss7qJh63cy2UC1SpV3t1A6ARUEEpYkbfyigrYjph2YdpVv1oQPjYqDEf2g3",
  "key28": "3YaSezBu28sd1HLb4xtWEu8c4WZjE11rWqzoAc9zeFchfdKhpnKrEqcY9zWnjiP2yACeV8F3gzgDp1Fni3MaeiqM",
  "key29": "2N5UQXFcoeRojQ2GwTrPi7nJeeoA52gomt53CXqEB1YFv15xyYkN4k1L63eqEc2X7XNgwg9sJ43hyZPRs5hdKZiN",
  "key30": "67RPRz3x2hN8RAAM1c1t3jTF4qww4rTB2ZWTuzC5VwQ2FY6GWthBaBGyTDwNB9Ajzt1aPYv6TirSuyXY1hHz1rQS",
  "key31": "3JJ5kBxzzJTUrxoiaYKWNPW2kdbq27kuLAnPt5rHt9bVvKdnURoMNzHuHYgXjCpbPqhPiCgAqK4uYAp2zYEZwyMr",
  "key32": "38H4fZHrmVztucdnB72eJ6gyyypc8xUEhMfkQ2Buvf3VEWf5UgSx1UE4t2r1ZMGXc4pix5hbBLBMWCkosRM5JuLF"
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
