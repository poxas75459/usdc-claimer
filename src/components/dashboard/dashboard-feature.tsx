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
    "FP8gczMj7RENEFntt9aTwCiosDCUzrVKU4snF7vW8YNFf6Eq2ujCxdzCsY3sEAUnqjuuCohdYA6BgASBkZS4mJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2B4ZQ5AjCBaq7Km5rdBrEiU37GnA9TkKFPZHF6drdR9bZWg5Nove1Sj9jn1Ai532844GyDzTjefgMA9woCXeUifM",
  "key1": "5XwgoBjHQiCD66fo2GbCqAvqGVYJ1YZBGdi36cCaCYjy3maV1A4bda3njVdyNSrW3eSXbyGbqeVuZ8dwEZVANsrz",
  "key2": "nEg8vvexM8i4chEzzecoiHTzEvjYsDS3zUQfn2WWZxVe8hhNqLSNjjqJb1FHcHbGGX1fd8W89gc7wbZ9ioqatYn",
  "key3": "5snefLdRq6UhZoEmEXR5nepNvRuLUeGdgdTddPtVw34RNFy7QNtrTugswc3uhSE55mduoUwaPLEoKwYKj5ptaBrv",
  "key4": "5eXYyJ5ab41FrF2n19nNepm1p3XZUUB8LU7odzCW3kSTyzn8mb95WgRxBf1i1FPHdxoHVBjeXYmmhrgQbbq6488i",
  "key5": "2gmqUzJ63hfzEjmMJFf57b1SPne2g9t78NT4CUJuygJWymEN8Q9nd9PoHuSybzwS8va9sayBXBhcX7bT5Ga4tvga",
  "key6": "2utveVGdE8jd91fEBvMhTgrLoaMvZLnobPys3CHsMPiD2LyRrcvSfFntu5eZBwrAPDBEC4dg8KaQYL2ZkC6uB16K",
  "key7": "5xsxNRNqZVqTpRZf2KvjPBjYamqd1ZpcMmo4FwoxMY6s8vzkTD9oc7U9ahUb9Rekmwx3GRSnDQ5zKBpT2buq1jru",
  "key8": "3DjGzqd7xyTr5rycieXmWB7e5zmVg2B41nqGk95hgEjvuXxbmNjrzJPkgxFBdxd1Ys9Bbvo6toYAZ4SLHsvcuCR9",
  "key9": "2WLKP1cQ1jH9yJ2LJnWqvAUNoXshMrDd9FHH91Q1wJDmYrFBYxB8GMCkFqirFWW7oswbmgWvcxrxQiuYqWEqdBz1",
  "key10": "2zuvcpjgHkPb4ZgKxRbLPTEaDEW2Htnchi5W8i1pCrRybAN4wc64CnU5n2F4gRL8K9PJdeJcbtE2MPP5nXHrEYTD",
  "key11": "2rRCk76TnqvLThpwW2hQdD53p3SgYsGyvDqWiZE4T1vYRNqHsPZPk8EKe2g2q5euRxXP74LYvcHbuyiGYwPCuVsB",
  "key12": "4rmJYCnHehV7na3izaCLePQ8ctkfeTmWWX6SPKjAfNjn9DB6QUvSUBB179JmfunNGTY8soAJCB7ARme1nK5VSCGb",
  "key13": "2QZ6djTAMhTzJynk1B247iRNxCvBeZZhdfioY9Wq5CCkWHHQThT3SJqomv74GYmAk7jrXJAczks94TJgxHio5VeT",
  "key14": "Fxgn1tys8Xe9SCfbu1tXcHB6WK3PpmvpNyNkoztQSvSr6PYvHqGaXoiD95DsksGEnGcB21utmUbyNnPRGUvenHd",
  "key15": "2BZzqixuvvgWddp4DbDVimE4TWWXtbLoyYTsxfGDGFzKMjddTAbPv9zR5Sh5aunYSCWRSxkKkndh496tX2GqAWyZ",
  "key16": "VR3poV6KLK74GtmsDqyX3qkvaHMPj51WWCPRoL77sPgeNDQaRxktKyr4jYCsDMwNbskwMXdinxkXw7A9u5Vwiiq",
  "key17": "23CzDE8jZwKnstpDvze6ptG5qGSJGBSmQJuxCvT7p2Gph8nm6bk8RsK8A56GQfrHZ9v2hJSZW4yJsSp14Lqpa9TL",
  "key18": "21rJkVsTUYy4XXKTvo8Tz5yjgLwUxLQHLxri3DZjC9JHTLnJxrDDrcaxYv7sJx4BDwBAok1kV2w23FkYfLC2UHfh",
  "key19": "51ykkj2nUiTBNXxfXDyw51MaH9hxU1DPSG7x9RULqdhzUqwZLRaJpLMKF6GngJbYo2m5tTpPw9vdrRj2fU1D6iDR",
  "key20": "5HHYKbJRv87LHxs64BefwZRLyuKki6di9bC83wyVubYmVExaMBRe97zkTQnWL2fmm2iutwDxhd2yy8rg59qPk5kW",
  "key21": "26K1vEWunAv4KyTDZ4X2sADvqnrXLttVf8C3xmEebkKSB7JQTmXhptjQvfaA7p622WVdLwCR4qmgjzqCqKyb3gJc",
  "key22": "rdpf21ryRTyJhdEXkAys97Ftt3ATakb5T2LoF1uHJ9GFbAmKtN8AXoxhRxk88JS8V6hRXUj3Yq2Uu476ESmsT4Q",
  "key23": "5ufSNWKpqdNHZBkYerbzzCLVFGws2Ye2pWqB9dGcmkm5Ubogmq27Wo3tmQM37jnbYxFzKhDUfRi9xZ6DaHexTLnB",
  "key24": "2C5dvkhFWsHmsDK3wdxa17wSkhzHXxScpJvy4XWyiLgLLBr2sR8YFETiAtofg3dRP8QAUHN7nBAwAGWdfVjfp5i6",
  "key25": "5FYS4iEWDsA7oHEXSGbUiiTmhVDMnNUf56zEFYx8V5LqeUgfP4L7TBK3B38aQxJjPDZvjxK8f32w5vMvUHdwVTeU",
  "key26": "5kwhtbHS39VXVNLyjHGaNZR4SfCAux2M99PtBJe4smqCCNEsidif5J5gu24tk5Bapi6gzvchHbb9jUdfmiebZaPT",
  "key27": "5x3XdnUAQ4qzfzHbm9ruCRU16hPLGkDPNUemCTkF3uVyTxxVm8jkab4FSGWH1eMr4k6qT8pN5V43zm5D4LUbGaMZ",
  "key28": "4hL8swUJAVyeKkArKmJ2rGNqPmBYpwC7VowRxF2jh52DzCxjNb8LC4iNZkPHaqVTtGHBiXqEop9psKsznLimBKwx",
  "key29": "3ceu2oP1U18EPpwdSUiuca7b5HzGpLHfzD1nUj6WWzQiBYrbxsNnfWdM8QLmMbyAkuJdeeVdVTPAyzFjPsWVMaAy",
  "key30": "41JLzUbVJdQguW2htaPWBbv4At87rTKNJc9ser2TTEeiQRXGpjHy7vgfP9D1nMbtSckXKVPoZjjsMUEjW2z2pqLk",
  "key31": "4vpswHwRqYrLuotPiSkx6J6XnB3fFikTqRmqPPbZb3RhtiNPUQmLPD71gwuSzRHbvt88z2YtFBcHG1S4FSCvxDTy",
  "key32": "2A2vKg89uzuXff6hKBJAzXQrMa1MfZ1bj3L7rCg18MWejrJTBygmMRu6LUmY4cWkhooBK4B9e1JhLtGSpxwi4ufT",
  "key33": "3w95MzyaGPfvKTSm2DXNGUzSvpyDm3sD6EtbTCzv7Acj3kUrztF9fLjvp6Lkyhqpan7LMANRjsf8g2Zf4eJ43f6V",
  "key34": "sg2kiBYdQqvWXbiwmsbXiNNaXHSpWdKYtXSHh2QVEfpeue6KTqjwMPScXWyCvtTkWBi82v15ZxTAUTHh8kNQUZZ",
  "key35": "2fzckXFAs6aXqBhiB3JfJyeqwyPTaRtb4254XeXoFirBeAVwKyxABH56yX8VKJjvof1gABUhDPspBdSUy9wUHgTx",
  "key36": "5M24xGk7e2AGtHH4LHMHNvr55NJt3t37ctCLdiZ9XV6yA4xCbVBpWi2fGgNA4FZVfhtuXi6y68j76ue7zMc6MCPJ",
  "key37": "495zPeYh1Lt89wL1CscH5keJqjnpMUXcmnHiNVKAUF5yi3hQyNQZkcDdpQaUuSuwJqwV2EqVNccBKPHeegMaWvUh",
  "key38": "2oY1NHkFyzAGbzh7pjrgroGHPfMNQoE7i2a6Q13PbNRA2P1dFRvWCrn6tRnVsLLQ2hsL5D3rYzHoAhNeFHVuaRqA",
  "key39": "3WgBMVnQSe6smxxQz8LiGuDfbUNL632zruCKrt7w3jESb9gV6DbLfxCTrbbSZJ2UNAfYnMpDx4hd1ABNwk5sohMJ",
  "key40": "2qCaTMwxrEa4YraFQ8TVLGdZkRNgaTQwxo5chSK6y9Vh2UVafFUQkSjF8323JmBwFdM8PEsYvYrVqV8w3yLJv4sR"
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
