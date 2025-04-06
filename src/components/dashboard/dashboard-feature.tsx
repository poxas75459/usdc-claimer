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
    "36umNiqh4Lz1at66JJXa8xe4ZyYuea7dDJaBjsc9iSPF1UWTRrJWopnT6QLRLS5SYBq9Ham9oyPkfeq75AwoZSJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XLboJAV6tEFT4PRbMLFewxs5CSxR5bMPgE1DAj8tmCDkmpd1v6XgnEYYnX5uLEBNKoU38DZ7A4JGaDtrMNPrd4D",
  "key1": "M6RoF6tDvBWbbPGPDTMGiBaEpziCR5T7SSpwHary88tNSAkEVUwp1MUL9mSpaBDf8sjFcJmyAH8R1jRSqm9v9kK",
  "key2": "3BLwPzcXqnA13KmZMcyVi3YG7ZxLR4ovuxGhxBy6yb5dswTgEoEuwnPpxpMnvky95ChbTDEW2pexfQmYaBgtjCzn",
  "key3": "2XbHs8p1hPasfMSjtofDQ2zzZ6x1JkpeLMnLorryj2qLWCim7YiYtGELJjSyb4LTwNnoY6FLWyTgF1K6RvtLRBAq",
  "key4": "3bFYjhQkuhFsedemh2q5Sm7XUYngkhRU3ZnxKD27mKibbRjodCAGevCx6zW5H3nMyvHSn5LSU5zGnMw3iN3s8XNZ",
  "key5": "3PNiXeRD9PEVdpfsbTTDdXCFd8q9LZ2jHiMXpYuEhC8iMCay8NqggjyTBZw63oS8PyhokxtcouRnewcFJpG4fpxr",
  "key6": "55A1Aa2kQdrF2vP8Jz5naK9uEhyF5AK2dzG28PdRVag9jQhi4jFtuducZBzWRJToeXNQxXeW1A5pKmjXyjkRgzy6",
  "key7": "4wBTDwwFZYLzfJq94JWqBaG4xh1fLitkGq8rA47JiDhDHTarkoXbdR7UtjbxVMMppwwTHTk334HK2wXe49gLcGvN",
  "key8": "2PS166kf2cBmML9MT1WkAtWDhGBh37sSQW6qZxWfGo3rmHXBR92YVtnZmp75sjt2ixKqkMretnBEDgPyJ5Wf6DKX",
  "key9": "312JzQhQ2uYVPnEi2W3HewNWnfHDPze5TibYiUr6cK8qvsLQCiLAZj7da3tC2Dyfg3cUhaYTDA5ky2wSBGyWvpfK",
  "key10": "4LjAB3d5op8K88dpNUTaAnvN25nGrsND4ot8ZMvxUaJKmWaUaFM3qNQ2ufvbrbwws91jaLpJVEcdEEWgCoGRTtWP",
  "key11": "2WjskFBJnfpV9jNk12PSd2V55GrVVM6XLRHAKmSFTuZkxUbKSu6G37CRvXLMibM7bLRXXgVJ1a4avDJGawkfueL1",
  "key12": "5gVfCE4Np23sHimH1ytFFBhWYt2BDwsf54AtsZvresAe1XqKdm1hwSRuyeoAXzdE61U2Az45T2Ru1eLStBEU6Prb",
  "key13": "2AWRUYyLrA8sjiSebSU44voZA9fwdMB9dBaCpCJtU6JoZaJJZe3oj53m6CG5PwJYso6oWnW9ouJssPe3EFSWGcwB",
  "key14": "2yzVM8iTkrnnYWCmoWSJiNjefLdvoKR5rTV35ECjUUgKeBTA5diJTiYTV5oe4yFtiusZa5Cxxh7c7aEXnrxCWb9t",
  "key15": "jeL48dPRgF5PGFVQqqyvsAych3oeSMRhp3WwUMveSLwzF6BXGsWs82gDpjLRm7d2N7nMqnrNsjVb9JMCcGymtNs",
  "key16": "2nNay1njBYpdzhLJiVJdHTqdkGf26V3K27wtm7hA2qFoJNj9YjUURrxtgQjn78Q3pGrpUCEBR2SfyH1Q1w1n9ptY",
  "key17": "33wMUzGnyPH2xNQvcoXUkNy8mnvPhKAczPfEDB7QvYgFktCEvQXAfSdWLonwwcDxBSjUL98pF2Mg5QhgT3aAQQym",
  "key18": "ZLJ5SPCLKSBPKhuWyzVPPgssFiiLEUfFyQdf1BL7LCjQRbeAj2jb7PxmPZaAtAcU7dn25JS28EwTzfGNhKpC2jU",
  "key19": "3hrBHwo53vTBQWYseUCfeCjsMQiEYs6viTE145UyDs3GWzg4R8RVE2TuAx4G4r8FC1KcWsfaB9K5S8D3AzyHSGXb",
  "key20": "4EtzHkTJqQwCMLvh4d3fCML7d3abXwVXixLtbYeVt8ZF7MBX66WrbydYs9VHgEt7uDNPnETNjzDLBoHG58GwZHub",
  "key21": "5uZoSNYeg9pvXJfvPNyoFXkBcX7GPWiRPhPRTifeeH7X7ppyMMjG9Chy4RUyaqBX6X92HbSGYLoqcwSz6CYcxDTu",
  "key22": "4J75igcCx7t5TPwTFSoPgAi52aSUTi5LTvEq9XQZuCq4gRnM364tLZdRBqwESJJtqdzAZJCyKfufChzzeGSrUk9Q",
  "key23": "4xk9HhMukqWABZu3HsqFnJsxbjhtzcfy833UG4vwySyjSNMtWEYy9qLvm34Fyk6wozX9uEK1kBPYHjENVVNQy2BH",
  "key24": "5CYAhTYqh8w2CafrzPBqZP57fMEDfQWutBXsLW1We51wbmbiNQpqCqixJTxEE4GmcdN4CGztyMHzkV5qmFBxMVmm",
  "key25": "4MsEwpwjrBtFCySbfsgvo7zuSuU2ZDLS9GZdoXk4V1mZMfrgRcGkuWhPzQGCt7Zj4ULVQdoBH2ga7sBUdQH7o1N7",
  "key26": "4udAKLTXk418XssrxMQFKE7pRtrHXfJqrtiG7xp6SrCPNAebBeWbp9oL2cscdaFHWXzSk4CRi4xGkX3pnsDKCL73",
  "key27": "4wWkkbrUENxoDfruT3tA177ZW5SsQqYzmjTrFp1hybWVN6u5LvjJsvQ88AgxAwSuLnrp1rz1PbYxrUZGk6CKiTrv",
  "key28": "63imPFKr7VgQDvkjSxyLW51Muycy25NV67SwaRibMZJEfmb91CN5G3Qmr9WGxbgymQh9q1fwwCTuTiYRQh8F2yXA",
  "key29": "2DrxPzfW4NESxB9oNzLutW9foQWyDeZVYJ63X8Y4MScNvEerJL2iAPhbW67gPFZUqhrLoY6bBpHo3PZ326YpHn2M",
  "key30": "2PMAZCeiJL8bD6J9a4W5PaZMXaWSibH8rP4SfdZ2PbBX8eNmkb21YYXKGDSP2wmcWibUV2nxe7jChYYm2Ti9G9PP",
  "key31": "2wve8RW9BCrUcp7AoB5shXCMueNw3QfxP1RSCvCuiHTp3MqY8EfcmmTGUXo4ruT82inzChb2T9s8zfaotccQpWYn",
  "key32": "nheiYMBn3XgA3f2SpLRmS1diMQYpCFo9N4n2K1G6PE6Z5sriRzmSfXAjgMyNxKbwEVreucGNvuNkoDHWJ4xTCs9",
  "key33": "3tpsTSaHgSSnGHea531DQGMgNjDPcZAr4mD5kJpnGkbTACX2HWKZuaCbSqydtjg8dAMsHWRQHDn2s9F2LMbGLiZJ"
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
