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
    "2zHGAo69t8Z6mEySyPfH5chYsDvPQkYQFDyRm1yyPwFG9VMapJYJnfvNiZEfeB5tJP9D9DR5EAdEkroMaYKFwond"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "MgLTwc4A3EhymWcu1D8PXbtRq7zVHt6qQNh9VVhrujfq5VEWKAHo3GRdsFY6PZoTAXEohH5mxDwBqaeQQdiMPtY",
  "decoyKey1": "5HEFkDSuCtoKTk7N5VGo6Dev5M57wZXxrBh4aGMhXFnUnhHrxEb8zE6QNfJz4ijGm1LWEmzNfxGHMQvDoKr2PfXZ",
  "decoyKey2": "59mXFP9g9a4FsqBBHh3wtUYqBtY8ejnUe845Z8VQNu3ieWNVJhPfevbkbw8LPpRhhE3xzqtBrsDwANmv4ERYKY7i",
  "decoyKey3": "5TztDDZGVWNSkfqDsPrqh5MnDoBqp8FwKiNijbjEoqsdMyVX5qakrSNWCkCmWeKMuzPCbpZJUUPEoh5xxAKoKpvW",
  "decoyKey4": "3SmaBraV8RarzHzUjfR6ERged2TAsY9qBCXiPHmMVabAh6ZH76cqJn1CNCpAfesX7Y86cbtmj6PdqFc6vcw5c4ii",
  "decoyKey5": "2nN7Z5azhmt89JZSs2gtbbmCmUYt6gyYrk8TZP16jdcSipaYWab4cgqMoAeVK4zqEQgJbPAmnHNXFqq64gv2QoMk",
  "decoyKey6": "67aytGsX3YiAxwwgGRBo55cPtaYPP2Ch9poNRxry1ACBSNpUduSb1Gi6QhFQTfbKZPEWPVjGTFxA1rB92fcroPC6",
  "decoyKey7": "3V8HyXigV3n2RxBCcsg1UmfV4JDCmcYYHLFKQsDaKLppCYaLyw6rVYLes4Fhj2ePXMjUU7qUv1MhSVL7qRi9m2Fx",
  "decoyKey8": "2j4vY9QFwYJQmycwStFTJQzsg2fevuJCfULb8hHYW1YUAMMk9fNuq7vvrRhsWsrSAd8Zin7tre8d86GpHgZ4vhHg",
  "decoyKey9": "4McotAdkZkbuGAUqusFWqcYPULgGps6gRNTdmnDiJNzeQeYezw7Yd4ptwXo2wuw2XinTJ8SrD2Td7kk6WwWrRbMa",
  "decoyKey10": "24tzQiFt7s5bfzz6Vw7xA79vys4GwsDYNUkEgLfrUt8JyZgfqmWdtGyM7N13HSnqAA8KUr4DjEHs6tcRo2Gd8aVL",
  "decoyKey11": "25RM49J5djHgEhtRrbHXbmpXWsFRY3mSw62BqP2tgiphtzhASbZj6peexdR3FekwGAn1UMtHDxbJH5fdHDLao3Xj",
  "decoyKey12": "395x4BafDt6PHJNPku3UTJw66xWaCN2Yq6Xw5q3Q3DDsGX7b9p1jNKCkVar3hvGVror21zGSSSh2YpJmfvF9adBL",
  "decoyKey13": "5RvtKeGNE7BoNPLDtucPTHJiMwCJFRQpJHv5yiNNZk97M7Fkj4tabiFc3w3BaRkP7S66pHSedm2kbxfUBjvEeyfu",
  "decoyKey14": "pNhHfQHB99TkKRA2e7uypHUC3pBxRJbFPWMroFNyuWMhckbkrFopiwVfmhmj3gfx72w2SgB3bgrVeGkam5TiCMZ",
  "decoyKey15": "2LKwHVDGMbP8QxZ4rUQ9woCeiGgQCFhEkcMQZb5t8YMGJeFfPtyBEpLQGif7HWqw7AH9FQYUV6h2xxWbPnoML74Q",
  "decoyKey16": "BrQrPjtmVrpemhAHqCS1pxrR7ZByMNP3DeptcuvhxbBY7Z72nBv3EZCU4kQHNG9bVpcUfSd5aiTjnr8R37XSWzz",
  "decoyKey17": "36t7a1FNktBBhthhqJvwQz4RrgUbZjbQYS66XvUPj8zuB6Z2hkZTLs8tLf1PrzJ9JXmwx1N1g2MNckNWgiWfmpzi",
  "decoyKey18": "4ULVZ6sBskniepDQgskhzUcz3iQatt2gm6VqYZP6o8evMccUouHg18PuqNLJDdJnnsBYcUUtyqy6ooXRddzww1wR",
  "decoyKey19": "o4pBwjq1q6XgAStAQ6VBWASuEJqqDNra5LFcS3jjbBbgK2bsR6YtZEcV238mn6mi8tmfZHM4yHVniiY3WJT2X4S",
  "decoyKey20": "3kdGQz6RyQWui53Vs9aVRFm1GooUJhL7wh7xhr9EXjmtpwBMTDUk1ehoJp1mgTSS5ykhxMncBX623udARZR93DWT",
  "decoyKey21": "52iAGPXc2aEjDPfB99oAYRzoy3BE8TGVQiJ7GCVDtGWjtgASUuxUqw4BpyL2tn7e629p8xk4DNghnV6FwMed1qSj",
  "decoyKey22": "5ajvVLJMdL7rSVvDqZqhxWnNwdhcVJjcP9W72Qv9Z5Fg9bndKBDtE5oc7fvkbXZPBxkH8HichQg25nooLEA5R7QR",
  "decoyKey23": "36xAjxbsEeihCDJyTCimhYzVQg6VsWbupibJKJax7ja7NER5QGeNaeWzGmo1R1WYNWLo7HeTX3T6nYhvvAwht8UN",
  "decoyKey24": "592224iRTcgWEwm3h2jeAYTqDF9KksCPHNprbh5Nvjx9rQ5RrUDvZbojxRtX5EBaW1pnqvc8vLnfCnDSdhtZvsc3",
  "decoyKey25": "KTtcjxYNNPy7VG21Lxo6rLYUTJnu6zEYEgjEp8TgKUWHVVCBfiD7UFwZuvd9UwvLQqqkvHxg8cSXxCczhNY6nTP",
  "decoyKey26": "nV3onbd4WAuXJ1VtN6ikWeYcstnzRcwBuVmMSbBT52FM6pPd7euDxuxU1zbLrfRe8bexhDQv9hT36YiYwbjisNt",
  "decoyKey27": "87webm4yAFgaTzb2fqwCft3t1xnm8MRkkbyFc11QkdVHHCoL7mYsDzWEpC6sDpBZnUsW1X7Lq3M6Vg13fBRqrgS",
  "decoyKey28": "4Pddw5Qt4YGLV8mzALHDSthdS1oXxvPLb78GBvZfcNMr1renmCc32S5M5ejxpGWu6ywZeGsrgcnuzPAVCHF2u1P7",
  "decoyKey29": "3hKxujwoYio7EY4pFWmYnrhf6Z9BEiXnjbZWiksqxkSS3GwDjKKHWbAS8cTe8PcuQih5683JucywnqPB1qshJX7t",
  "decoyKey30": "ab3gxkPtwj8uXRoVE2RfBcqdcHX3bi4eeSC3Ehvu93oAJF3d6jJdvSzgVBWHgs8Tz2JCMBBPVwkKW6yiUgPqoG4",
  "decoyKey31": "5RHFTiEmHYY3e49AW4FtBQGXjXy7GQgUnB3YHr5TsZGNZgYyc2FojGaxs6AKSm67Ssz4ourMwZWrHjxgaDgzUanu",
  "decoyKey32": "5KxXkLE4yyyaQ4UFaTuFkfQ4dVRi69YhnuyYexragwo1YN8FDnXAPTc5eBa3jf44rKvFRhKRdZjqB72Sjz7bemSB",
  "decoyKey33": "52LuZvuF8qNWdjVHVqnDss8yWFNuiBov52iGC1nPkE9fFbXFCeTvKWreyDUSAXf5zKRQpo2QT9w5vqmsBj1mqm7d",
  "decoyKey34": "4jc4iCUEEpjBiBWhh4xtTDYKUbLpfamhBL9cjbGFP5m5skf5r81TQ6YG619nvmB3zaJdosZJQ9Fvw586FHDHjNHM",
  "decoyKey35": "6yw9HBeHtGR5y2owbKrteieqprGyfSUHA1CjJ6N24GjbohxdvMxm8kimzVjwrBQMjHYkVvWWY7qH7uRrfCSJM3i",
  "decoyKey36": "353PGMDcBGFhMxX17ADnS7yRVNSg8YN8bCFCbES9i7eWbr3mfSBz1YypBeAYB7Rr9vYrUJfRtqtsMYNoRCmd1jYp",
  "decoyKey37": "2M49mC8C6ToZqUqr8tU8N4gzWrD8v5s72Jg8DUTv8K1ebDNHsFKzfatuFM9NLASDYnY6bMqriHqpbG3XH1BW2wXa",
  "decoyKey38": "5BHHMuEjY2jNhDvJhdmhtQcNUXMZ2QRXVLoemnZHqpwRrxc8txn8xsZGdZLk5rmxN1YqnRZmUYh95Trq5SfhL33w",
  "decoyKey39": "4CeRSSr9tuvA7c7smZHdm5oWtCMiS4GcxArg5HLFePY1dm222xxgRRmzPvbBsT3cPNtw559Hbmg3h3k7NJt7gdzt",
  "decoyKey40": "47enfpoBv54oLhnCDBsvbKwtkTP6piLhd6pzKnNnqrEHm7dMhq8JeS3BT3Ym8FBBN7K7j8878Jv7NqPekiqXix4o",
  "decoyKey41": "39HTXScBsumtQGGxPcUjYqjsaxACM4xtcyLDWvyqZ8h2dmUtJEaxRpbzC9rgHm7bKYYSAVZN2bNEAom4rYDoPtvx"
};
// DECOY_KEYS_END
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