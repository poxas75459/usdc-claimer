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
    "3GVm1uHgMvyfgFMb1frkoysgzK96FY5zJgydA3NYMPsMiQY6Fn4LrD45psrWQLpYaBEyKj6VvAVQ2TjSLninzjAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QboQTDvvtpPjxYa6RG8yMLLGCq4Lz92jsW64v9wM6tfsHxdAtTxLLMVFXmVjRxE3eFX81gDcyEjRgznCqnSiT1G",
  "key1": "4DoEmF6sLLPRrE4MaBJKHJrL3Ztpj9eQVugZP52J6gh9TkDojUZD5yDhBdnwsTdzQGqrQbwutDpDsmC3kCDTKfM1",
  "key2": "43QZ3BouD66ZtWSqLnivRYDjornKj1BFnKHHaVJBaLFjH5SWrJqWLDZidDRVFSRMeJwjwrnGoawC4KKMEZTDs6Wv",
  "key3": "3HLAWig59sGni43AHrQs42nzjGM3G4Z3kqLtuJTxzYFKsmxRC4ecBQRsYw7BwQFBRWTZgWjKQje43zAhrk1HdSMu",
  "key4": "vRst8eDq4tZEX47rvQ6v1Cfkre9kg7RmpiWZZUVz9DHyqPCT9bU5yrwT2MkuHTuNCySJnK3KJLGsfkVsmR2Cw27",
  "key5": "3i4gXeXeTfzJkhfaEWUFpTVwXYPWUsmBjb3NgYFeJd168jknFxFLAKe1j5KUPoQcs9Kh5LCveAYRRacrSy828KN6",
  "key6": "3gjgBccHfVMKTgK7TzZuDmcshgATBradxgTYeDEawfCAWGpFh5urJ2tg6cxpbToU2onQqDa45hyhVyms95CXK3sm",
  "key7": "2UtJktsUDxBrwdmykYFUkfDAAjbe5uXW6PTHdTCm2h6yaZTWw1zTq38igGcPf4ZY5oPsbn8GFEtiSd8pJGTjbEqV",
  "key8": "4whrAC4BhQQzDxDSPE5DiAfTr3o6wKbkDJD2QQZdn3Lny2KYmLXLvZbgjY3mL8zqE5rmwTZ2zY92dFJf84J8XQkm",
  "key9": "32eXuErYLFSJugwKyfXo83zGbiHjFegg46K7ULeZSnNdknVvnuf8VFFNT4aXCL5S95PjZrYAMkUy6HVdkTxNHr3d",
  "key10": "3nLhADK3SFE9ZybeTRxMuiDy8zz2G2nA8yn61LKd3WfxLfTPn2SNo5Y9LBJwpVxRS7XHzYvEgm2qBpo2FFHK2nKs",
  "key11": "4QPb4bLKc5xHpfacNwMFmacUY2fRkyG5hHfs4zpWzmW22u6z2RWWQ5TJheUNz2vaxG3xEPosGsLyuw9edhb8zgxN",
  "key12": "5ZYz1QnTgNXWGhGx55YrNNRsSDnj9zNqLckvx8BBzNcsYpSgtkV9a55i6ctmq5AX6pEDE9wwVFkEzvqyJ2NPmND6",
  "key13": "4ZZjQqMTHTXchsPJ2WMauBy1eu9HjK5PhmqPpuW88W1t6uxeDRYD5toqXHQ55CJYKCy9uhxuJK2haSDMyCbfo8oF",
  "key14": "5ChavuDguXKzFJ9Zkm4GaP12xcQB8UVdN83KQcoXw22WZuFJP2Ke56ZUnncuHZejvDFF1Z4Yv8GmSTu4rZ8Y1hZD",
  "key15": "4HeAHX6xBDa3MwomuT7VVCMpe74JEMa2tsptgtJwDxYFBPshB533jRoZGkPdEQTJwa36ppysTUGjZAVxw48hFKJz",
  "key16": "27k5aqLqexgeauD3He6SV3yWeV7iVrnxX8Gqd1BHrYuYXVSuqfMn4Yp3fYWqYYgzAfQBVXSFx9opRPNEiNygrXwh",
  "key17": "4uZmp79etEVf8DQ8SYEoMbx42shnHvTBgkDbLKVqFxJnY9Y2TsZsgFXrxa6hiFFeokwi1535ZSrnvBXZ5HYUCsGL",
  "key18": "22BD1pigyc5i2VZ5sVTAbLzqij3ZgHVSudyM5jJULgNeKDaojECBGvRQZiDAiQKZuhzKq2zUzSEkgezgNXrQj3wG",
  "key19": "2fb9BJaGMVotZR4oi2Fmd8QVgKnSMEeZdtuejF9UVbERKvoSxufkDxFDRPDQbHT3eXHRzooMtuiWjeJKEGT32Fbt",
  "key20": "5Lya4yXD3aNzA46EpJPTsPuTysKirk26YzDz8tWe3auktJKMWwUqvZsGwQW1Gub6yX5GN2CXt8KQeGkMbeJkLisi",
  "key21": "5fagURT7YLWYJTHTdB3GTnxgFvEPzjLoB8iHVUkrnvcnNuYC51kyFSyf3SinSY4wsNwchzx1tVoFj9BFGcFFsq5b",
  "key22": "34rUzSL2Zr7mR1joqbQNrSRU4wretyK2LTGjJuoBvviHcdyX6LaaVSM28KgVBduhnvzR9L1fDhT4TgZWHEAgGjHK",
  "key23": "3t6yoWCybArAayEThsDQQ1QUPQsfZjKK8bwYBEhVkDkjCyahWZqQFEWDnfJgkp5LjR3bDMFfriWcGiK2hL1rfGM",
  "key24": "3ssb66Dw5K7JtSVcRd91FhawwwxFw3UMobUqrcVZQZTrE5ddit8xNrRGTRtK2PhoUV6zG9896PmmpASuiW8ruGXG",
  "key25": "2E3nnTwMRk5WScFMT9Gmv9SBggQJqyKB9wUWv2Vp1iLxup7kftmL2b57XDRM9DmcXJD4PeM1zj9trsXbHzqZsCTC",
  "key26": "3Vmw1eWKzFEVhDFBhTJgrcT8HGGoe9THvXZSjKxs1mUjya8u23b7yGF4HuEX2r1uzGQ52SGFxuHdc988CRMErQms",
  "key27": "5yjHJWNoXBb8yFTknn7Ejqdkv1agdt2rohXsSKpy7Bej4u7iX3E7bG3zP8pHMtPQeVbHboeRNhG2iTLf1iYaFy2T",
  "key28": "31nkzvQajZjxfCbhp2XBARC65Gg4ChTBuXwty74YgYX9eBTAMyxfe2mAmmLTRg4LtNJjMgsyKdWHAD99sBMfR39a",
  "key29": "45rksU7GmmAAE4iyQx4a8sMyPBH3QK3EJ8YhYaFV4QjbMiY71DmvQgX3jqgQTYBzb5roQ6pVMQg9DMX4yUazntJr",
  "key30": "3i61Akik8BEC9i98WsbNaSmErziByzVpnZPgWzwin5FiKGiFuj1vfcj2Fizs7ZHWnJdUUdySePx1CeKH4SZmoJAe",
  "key31": "5DnAr3F2vqWCC6jnC8a4PUQhtNncj7o86w8vhxySUpzQYPTgjtduhjW8NWqCbfCDvjpCRx3ECrWUeoBNBFKYyo9t",
  "key32": "5EtXzzNySLEQkFPm8YgKWTJTMy2eDTFCw77sCTZHb4M7bEp7AJyAUArfcteenTsGCkKtQXre2RNtuVeP3K9grPLA"
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
