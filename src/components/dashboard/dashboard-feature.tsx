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
    "p2rfi9b8uoKtJiuvMUpg6oFtZL1tNchBfxoxka17dzSrZnq6JbQUdnPNxfeTH3a5tG9Sexoz5cosVvBNMEQd5kV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kebkgfh5vPdggujf2L7pBrhDz4UL4mH81LGbpuBzHJqqb8aBzcdA4mfFQtpDDDHzw5vhS5LVBYT9XgLLKdntH4b",
  "key1": "41j6zPaLBbmUsu7Y4b93NegNmhr9cfMY3fRwV1EeqKpwvjZFe2LoCwPHHQbJDofaBzfcjaRazf5WFR3yaB4KPiHi",
  "key2": "24gsMV5PpRjUyfMhspGx6ZZALPVJpceEcWLEFxv8v1aqcwTV4hdKN2YgKUbN9iVcsnMEVDxJYdMXJgQpX8wGa1KX",
  "key3": "29rQXjYMtx2i22kT5M2Q1ksMneksCCHsox1VXDn6fzU1SNsNiA8V8JjoswVV9f4XDsM11B27xcEo4z1UeVfzyRX9",
  "key4": "5wrwSkXxoj9oHzDBtz8LoKWeWyznBNaqFbhV1FzNJmt7eZQfsF2ZmKFR38DJ6GqtBtgLMeazobsoqTUA8wj2c4uF",
  "key5": "3TjtPbkcvz2PRrAujsng4G2HfMT1JCMgWkYsqdpNJw2UsSyYUDrT5b2FoU4P1LNuViYu3qmmRK57wSGQXQBhssZa",
  "key6": "DRJUQHbFN2PjYL5jgtM9t73YHfJ62A73BxQWmdzfkfDQ9gVuYV47c2uBWLEEVKY7ZzoZbujSpuakiRSf9E3tzX5",
  "key7": "2Y5KEV8RPy9wKdc8QiA3LfLkMQBMWEaNmqz4JXtQ4xCYCk3PuyVup3mV3WVESdx4c8WxRRhXvF6HPrfUff5jjwK7",
  "key8": "5r14Nuuzeb1ixZsTBX9J7zpbM7F44Bk6HCTrAoHJTv4z77nnEuKAQw5L9pW53erRKdAtip4Esg2r9mfKmdMJ4mia",
  "key9": "5qCfDXezFthqHScMeGxyWtYG5yuB5xkKTfzDGnLxWFW3Ld8fQbHyH2VGdfGDHPS4eNHw64AgBUuEtiTePFm1wdub",
  "key10": "54c6awmn9tZ58WPk9N86iQRVj2zg7dr7Hq6K4UFAFJMPLyrXg5Dks9ppqAbteb8Ym5zsMFA5SGgbpHKxbc94VZVr",
  "key11": "4K8A9j8wDRDpyaPFENreJgFQ4aypUJjFbK34fv689UXR6cYwFgyQ3SPjvADTNBxro4KDmUqqWEracsQKkopq8Dfk",
  "key12": "4RXVvYnJrdteF75iouwNMUT2Up9rE5QZ1mdWJkSv8cCUoooHbELhrmDvb1EKZfNy3hmtct8qVTAmzj82tXhPg9n",
  "key13": "2pi7yFUVzp3gFVRxLNh1xukxu4UvXiXmtuemukBdDfr5vHu52NT8QqX8gnK3x5RqiFADUkN7hB8MjmaRmhFTA1Es",
  "key14": "5CpcpVFW1AXca4PKedLgcEMiV7qN1gbsXQqM7infHsJwJqw7KbxoSeKFYnrzmUi6a3J5kbs7EuMXPF7H65cJCHXt",
  "key15": "2j347Ufpq4R8AckGsgoyrWazEo4VqrANAnFsKzB35n118eqDHuYUTRrXivH7MgE8MU4oryTapRXEHtQjQaeA4v2s",
  "key16": "35T3js2DkP7fgP3CnVruL5q5KFnjSbHwd6XTHfkLs3WVpjMrcPNF1XUJnjzTj7foaZJQx1TrP2cSKENvWDdZQBRx",
  "key17": "64oFzwbgQeX7sdoszvj93eRTgr8A4KszioUg4nM6scVRxbRTpHHLcEYguvsy88XXgUj3eM3VTGJjHDPUkgMxb7Sh",
  "key18": "64H3TTxXcmrqdyHxPYincYADNP9N9Z3wVhwVA2R87BDAAZc1e3kqLrwGaLLwDwdojaB52arMGvKxUWmRp7dnpw5j",
  "key19": "2hW6X92Wu7ZfuvfaJhSoocsoVd6j7oYyALyoRu4oWVEf8GE451xW77e1kYJAbbavZ1v5VPPpr3NAoHYaqmwt755j",
  "key20": "4xtL257YctvQnrTKiizsEwYGcBi1LTa3fx7hRVNphkE4VfpwTmbG87GgLgQ19YtVuSD7Q3Tqvyzx81B2pynQfAa4",
  "key21": "4nrC3EzcwsBBuCVr5mA4uqHHXJy2qbPMpQKQsXbyFNzbpXQRbPzyf4PMRmzvEKLKrNyC1vxJLH2Ndd8skamwipEx",
  "key22": "3MAWnwiiGCGBcUvc6RobXp4waqD71tjVJn9duvPvpXHZqhHcCpomyrfUKW6peK6nK6kfvXgD1eDtQvFVoPG87HSi",
  "key23": "3tXXmY8zc6hjqinDZdMHjatfuYEFjHg1EiKAk4WjJCccohNCqRy5CVYZz5C1RNckFurPNEub9moXE1iwEDhCtKFq",
  "key24": "CVnqp84zKY2d6wtJRzdKJsogt5cxpjinSj8RkVT6aSe145693kCGyZnDTkbAqER181NY5fQvJ5JdCbvXzM2rgST",
  "key25": "64QwFSoEFT9CnLZScAwLWwjeZNHcwJyTJEbEBosa1BdFgtC1n9Q1QHMiCAMQ2yME6PvDoEv7RUnSN1FqBDkLLtXu",
  "key26": "2RUBzc8fRxuRgV2wnmr7u4Qi3KnkFs75SFao36PMKGMEs91uyfBQqdPuFJpcShocoRdXFUDhPfiJjZ3Uaec9ufKm",
  "key27": "2pfCqakry17vgnmgF3rmHXrGCKAGMFnpimQHCKbtcYKqajCa3ZcvTiaoWaG2AJSfR5Bcx6E4Dousp193mS7jiXbW",
  "key28": "mPmGB1E8abGpk4jDZTRX61iooniUmqEUS3fnEn2GFKPZ4G5bGuXzg3fFjzj4d3vNki1WyFjzVdgRh99ibYzc2g2",
  "key29": "5NkxuBkPe768cyGZ5LjpJ5j61wrwhVZhRRDpzzZ7AE1F2rTbMmwqsjHnjETpd5KQiaE6v1XZzDqAatMCMUUZKvZv",
  "key30": "2pVofQFE4omst7bGTcS8f5Fx67BTsJPWq3pMsuFqn3R4yBMGVnsoPZH8UYPYbcrXYB2sekMN3M9Y6jdwW9xTEYZf",
  "key31": "2a8jmRScYRKtcZR2jVz1MPBpCKBHLgHa8d81JQsemToVzEognSReExgdWqsgUkyNpAggXo8R7CseuRcLpYSYH4wK",
  "key32": "2Wk7M71GstRDzRUz7a1sdzzf3D6piMAkbrhmZqkkDVKEqE3DJdm1kqkR2eLfDhQmHJpU3zxXfgYhFgMVFrVTrnff"
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
