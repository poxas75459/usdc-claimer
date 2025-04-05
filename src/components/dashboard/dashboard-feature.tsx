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
    "3oYf2wNFDniFF8ixVcc11XKmdVs3Mb5jw14VtVsUdwKwabpw6fijcoKJ5yAq5RmyzjY77xMs9qhsCZdcyYkBJX2f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kC12m4rb4qq1i9Fs9meh8S84wTNk2hSeJGUxYMvX8CRVvxr59sqbNbnopeeSqi2UR53pZb1NV2zcmDwTKZnDu44",
  "key1": "5dN6eaJVdxaHwsWpTZAiNLtqMpUm4zPkZPuvKGv6YmKztyxsFUTy36wikWtLd15TDaHcnE7dhU1YMrnxT6f2NrD6",
  "key2": "8jTVSpfUrvjW2gvFuCdd4YeKyHqUE8bhbk3jHjxiXAThPzR9ydrxrGQtziKCmozjt1qDjHTLc5r9Hy2CkUGpBcu",
  "key3": "qAMtaUBYrUHpWT86dKpQw3nLvncLzbQe32dptyPZL9qXshyfENPUZfD3EBfr682Uw3oLAtavY9i74T5MH3zXeC6",
  "key4": "3xthTWXAU7Lhkq4QvjSpxSmsx1SNp2vC2MX2b91YZMoLkvbuR4VtySURjUZ155hR4pnRSsTbh7SbzESEM8THxX54",
  "key5": "5k5iZskYAjfjJBKMyF5uxyXQNUokvvhH9sQqVwMGwhf73CPWSwcc3rSGMAiyxR8bCerQx7XdbipecDsPHFQpG47k",
  "key6": "422JtwwSHRFarATagwqG2Ja3XiP33YtQecBsMLDq1de1GkWhsF5xafurwfgEPhpvqtLNaronXPRGn8NnxonzHZrr",
  "key7": "3NJcJ61insWXGfHUM5sKSk8fQUcq7uviyojyS2HZAwXFg6KLEWv2zVEd5tZ81r788F5toDivGmfs5wwozmEUS4M4",
  "key8": "5HHD1X21rVYizx42XaAooKmjFqZg8Et9TZTtLsdvwR1drZpo5AaC5JF36inDoC7VyCHSeu5FpEmk9Yfx8wo7NGo8",
  "key9": "2PMrSYZ7ZmCgwJX1Q2vFr4hSN7p5edrzA7Rt6Eyo48PdZWReXtvvzPPHX8J3RWuHND5LSiTenM5VsZh1Mmz51C5",
  "key10": "3cx6i2dCGYE54X1Je1yLtSrMyMEvV4HWq87XCreycfEpkniwixcvnTwN69Tbu79FR2Qdf9Eor7Cb3L34nyxv8hzE",
  "key11": "4RF7MCK59btZtdgdx8SQB5HmwnqwLUCtGoDUzeyfsCKD3AP2FRps2UQ2A3j8xd31ZzSvZXDKpdF9fjZgLpKWbAnP",
  "key12": "44VnBQ1ktsyUZcVYT64soBRwpZGVDBJ6cHSDs25H2GEBLG1Muk7UgwBLsSZb4k9N8cYjsCQw8N9MCDxUjMnA1FrZ",
  "key13": "27jaJGrWcdqQmbVK51eMb6TTtJTbVq1kWYxfGhteDha9bThj5xxzEqrwfs2jKpeGSENA7RdagquTNkMASZVARob4",
  "key14": "2SctUdYgU9pQuCw5EjUN29zAFAjSfbJ6NRzVphMSCBs78B2ZDK9bLjsU8UUmkJh7j7AzkpgvsiKZbkcXCy9YiPvX",
  "key15": "mumGokytc4Af3PJraoyM55QbfcSJfs7ezwesQ4fruoMcAoGjtVdeD4reXdYBd8XScUosmyXyL6yw3H9cHp7JPu6",
  "key16": "AFBRaGC5N2Wo4ugnzZHHHPLCpwMamH9fvbHD2WHABrYTnaAW6vxCbzwU3cuw8t1L39ttMY2f7wUADGF3UY4sXxb",
  "key17": "3MXHRYDNypUaTySmNYEdqaPdFg2gZcabwAw7voWmFUFknkxuRugFpXHQGsZFrFPYzZ2ZFwURkWYwAnmeWVh9L7xA",
  "key18": "4cDmAvrcoi5Eai1pyq4ueKPkMnt9oecJPJLj3Hp2g7y6KauD1ciYhzg7TfHhBzfL669cz5bRQf82aREzxcpiN5d2",
  "key19": "4ocJLW3v9A2p4aCG56WQoPsVctUUGL1cfptkEiHu13qCrdc5RAigPa3R9b36switqfvPJGW8La1KUiqe2f4awui8",
  "key20": "3jCLd5RABrJe6izna1skPuSgqYbjSTcKfFyWcDem8MQHoQnamYfUD6cw747c4TTBV8qLFdT8EpSrvg1p4V2xRv26",
  "key21": "FdTPuTM59QFwkBYnYm9AhHjRCgzBtUT7enKvctVRnK4wnRxjBBoP8zCXkZvYtF2BLmpPSAUXhBNvRN5accHFr4u",
  "key22": "5peyKozP3fPUHoqqsawZgYAMBNXvfK3GvFfWzF43ou7ehgFbd6N35QquT4WkARNKeUaDeQxRyRdFHK1npNz3kRzC",
  "key23": "5h7j8JaiZgzr6kMkKhhgtAFMRC8L7o6hG66iVnxKB9f5Mhwgf9E1PShzqxqsUpNUrvWedhetdrmk6cWkftqD92RS",
  "key24": "3yRtpZhC9AV5NpmgH3AY6v3HZV1Efsh1jbuPS2t2UYSY6Sdp8146t9kGX6Hz7bXqDTZzR4KQmHVWdK9DFSfmKR3q",
  "key25": "2RF5gvZQXpYTcws5D5yWKgAFezgURpWiRvVN57YpwQc3Hv5PUvyYVxn2uzUrQ68L7x5s5ruzz1mABAyWLmySqyqj",
  "key26": "2T8TWv7JuWGdaX3eG2ijDvGgJD7ysKMh7f9ffH56b3RSPXxJcihNejdpybuCE2bdg9g6J9HHaTqdpDmWqBcMmBfu",
  "key27": "5GZxAtMVVzkWiQQgFeYBHMNs2TvqcrXYpN8cno4LCYvJC44ne4U1QgdeTZNdbjtVagN4dhiR6QC1x969dRJJG6n2",
  "key28": "4Fri2R4wQidv2wgBhipiXTFt8e9eCRuwV87fJ4eSux44QPv2GqfYQ294ygBwhUQqdxsckjUKt8sDkB8SBtzmrG9Z",
  "key29": "Qgg5R4DWVnavNdm9R73hRLJYHXmhvfeaAsixCzsceUeBvWYEC2h9QceNJo5PBxkgLceumfmpsctB5bQLgUDynNT",
  "key30": "3vBgeNLZs6ASgk3qzBzJ2hK7cbRfd3kS58Hw13Ye5DCfS15k8HPbSxzriqgsp73Z7iMaxV9QJGdr6rac76nwtGQk",
  "key31": "3Y9zU4Bu71vqm3H29UuaFd165pCbzMYziCFJwSPBShWtQi7n7ziTwpVsc5Qjk8HhaU8oUe7QKQqCsghhSiRqoxS9",
  "key32": "4Cx2gAZsu2foDfoAoBRESoFpXiDTNXYy1BtJQqtMGF23r5EoWTMhypdqSXg1nhRf7gJLRAhLLxDjRK3BJUNZViTB",
  "key33": "4ao9cQeFWBBtGVZeGvCxcLsBGRHdcfqaC1EH1pSdtj8TzFnPrePKj7xSqDB2xKqYYtchLYaacMAFhNeX96ikoiRh",
  "key34": "556kZ2neKpi8Ja3YpMsSU966HroNXc8qvRXfaKCpgLwyqJf1GLwjStb56QfmUjU2edVbW8XsrbGer3iq7EYY48QU",
  "key35": "2HMrECzbGLSeJBfma83haJ68xQ7pjj9hC2rqeB5p99ocgVHggWcFzzWDo1bUhyBQu1qVpbYXpYY7Y1SUWo9cLo3f",
  "key36": "pLYp3aYgcUufZFfkux7JaBa3VWSEwn3gkfFiqRcBcpjifHkNRGrsdKSMKWH3UQvFX5mhpc65TfJxDAEdHTwdHKe",
  "key37": "2tBfMReH3UPajKdqufnm86zFzRzEbvcSASvPZ693K5c7i6mHLkgjWmbq47jxmAGoLH8MQexRbGTeywRoFZMVk2DA",
  "key38": "3wZyiXDrQRmHxGNUddpTTUJAJc125Z7CZs2UajvZ8hJMtAjJXFatk2g28n8tKNKXqbqixnU3Vx9ih9SZUwXt8fB4",
  "key39": "2tmHhgN44xDyERJqjnQZBRXMw5wPmd9NDyWp4z4AaT5ktUaSXGJpzB2vHnXcXpArg76N9Vvw5FNzKynJj2w6sS9f",
  "key40": "24QkVNNbfmSq9duzP4oCBJ2eyMJWR8PyKLpvJXJo1NkD7QWiLXHWt6ddvPbQPCx8UFWg8svqihr2QJb6AKBEL8pA",
  "key41": "3GMRRVNLk3yXXgeBQofQY3v8wQpEesfq12WasKMUDxFGsCgwEPTmytTkx6Jv6CyexYscZ2Br8zA3fkwnfGpE9Kgj",
  "key42": "5WKLPHKpRU5Py9i6WdWAmNhFYuwtALErVVNmX7M25Nj4VqqX49Tp6Dx1FYJd7782SgzrzFsvsfzxJYUuyyG39Lqy",
  "key43": "hpBxCsWaGWYQ9iPkiHsbcRJH4Nu81fzNT3C9sZ9i7W62J1YJjz8RuVenwdmJiP6f8U28udAr9PDi2hthRd3S8hA",
  "key44": "38HfavqPqhVByPqSkRSqDD7eyCHosZh76GEHKqiTQwwT2GE41N1URVo8REhm6KXV7ueAzmc11UTm7i7DpJKSFCar",
  "key45": "2jmQL5dR8XXCutTLEMwwdrH7bDMQDmYP1kCv7HAkceUzst1mdwvvtv8WVKY4BomxcvnGCt2r8WNUSXs5NqmzHrqw",
  "key46": "5E76CwcZCDahcuxpvAYQAR7TKXZb3b4ZpSfsDU1UNJzsTY9qzwHxiRDcwKLNt7nXyeLd43C4kMYDdZ5CcjoJPjkE",
  "key47": "QLKnbZNMs7qjbjT2Y51UkFpoCNjQs7qW9B2QxkdAoDSKAuACLgLLtwyzh39qspEqX26Fk8Gs8RKVrpRyFFpVof8"
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
