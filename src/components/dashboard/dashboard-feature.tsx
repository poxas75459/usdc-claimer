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
    "5gZYqcDeCoeA5b826jnWxHN9FELfpbQFkqNx93Ast8SMkspdVzWAARCvqs4FyvPdKNcgHDMe73SgeCFmEZgTnjjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JujBA9ZB3x54MrxHPNT8f8oju6hbmUo4Cj7rocLJc6Cr9SZocAPbkzWDkpbatMZ4ykUj6ubijfhquatZeGLJeY1",
  "key1": "NXpv6eLXnVnrH45NqFCXdt8np1zhYh2GtsSLoCr6tA1ebrbR5hUFNydStppHGPj5obZHhAoaJumi1rCxwhrY1Cz",
  "key2": "58ffJSxLxqQsgmbSumWK71hb6Y1btns4ZK8hs1DnVmZhz6VAeH3QfbxYnhxD2oSm44zqAC9oXmgaDd6Xc5QrSBZC",
  "key3": "21KAGe9D4BqEHJxb74HBjsaoyDyQW76ktkibu3UbhDaWLvMn6PXnr2dE8TuvjDoTU6wucYu86WQWTcqHW4vK3mqw",
  "key4": "5Gm5gq6wjuv2DS2Jcz7yLiY9BTFpdq3d5APamiGHGQ35NtpNfhK3FK5qeKKN77Ma1YafvdWzeinuRwZ9cYFHXLTp",
  "key5": "5GZKEBbSUjmApV7pgmSFKcxJZ87rgi3gbdfnSYroitLf63ggrsc5GJNjT8iuCCk6V8BgENEAJHxgxT9FpKhkg8Vq",
  "key6": "JPCCecLE1DggMnawPyELLYK8RUiZBEZ8WoEA78MCvK83Zg56VxeDi7SWHyvS2zsaHzEVhMgMWCYGYxAbRav7d9k",
  "key7": "3Ras9sQndyx3mtq4cMM4k74GAR5wijKSGWnMnYe7Ds7vDi9PHhqyJkwjtGTewTA71VqXqxsbaa78VMdoHtfvkY5M",
  "key8": "2qiu45TbyxzVwAnUuKXWv8Zo9Boc4D2ZnB2LfsuRTyeSBDcAHUfsXQfPMasVnzkgBKbAA4S1hrbkdXGmRY9Zgvrr",
  "key9": "4UmHkEpDK2Mo8gjcjdVzRgvGPqDhodeUaxf9nzjp3AENTCMgjs23VcjFP6kkUg1com5ZBnZTnQGUsh3vMi8ffdWK",
  "key10": "3obxayz38taY2HKj4bXFUHdBqXRvTb6VEf2bDww4vZw5XQh41S5BdxgMrBEDTSnSEc1MqizqS5C1DkxNBgKZDN21",
  "key11": "2idvy26eqvkqfz18FGR1NfkpMn4LqKmuYhDsPiwUM6JuJo3mnV3gPJ83zvTKfFctaGjVctaiZDfnSumDo6wVzrR3",
  "key12": "3UeQccoq4fqNrcw1fTtEM2isR1LNNBVkWJZfm143MwtHrWRvz2AEZmeihbuC4fyLWxg1yKAiVLzAuYigX6dBcKka",
  "key13": "2FfB6dPKRjecnuXM8Pg4ZFBAid8MgUn2j2ZRenjSnVbmEt4LwAcbmxWafZWZhJuDFHtnRzXUBcaN7byYgVoubsBb",
  "key14": "5uYN9buFBUDbTbPYNFArWRR1gfAhssXaJ1DTo8TCzX8XfC9NCvKtwameoHEi36v1epW3ddc99rDw7kD1uJZz7iw9",
  "key15": "3qBDCunZdJ9Gay5zingQW2JjE7m3QG2G8bTjwtTHu99kNtGf9mz3QXWrSV8kMWm7tCdRD4Y8ZUjvdZiB7mq1Xsp5",
  "key16": "357CRmtjMg4pwLnCFbs67mvrJ83F92hjsFji5mcBam3SWGobswLhELZeKAE6AAuEA3XMbbry3EZg3mAhLV1g3akp",
  "key17": "YTu5ttYAU7MA1AoXQPpY3CYzUg86yuePeNbrt4GAputgpgiJeFa7fassGbiqGeC1RX3Po7UXMyT73AhhXayYynx",
  "key18": "TuzTmH195b8mPN3xVqFmjQ5PwnTMCg2Uv2NwjzQXQgopVW3ERx2EvcQkcF4aALokbGYAfzZqJnrUu3FG7Am4sCM",
  "key19": "5UH5WrmsWHbiV2qJJmTB7MNPSZHZ1z2uqRb9bzTj7v5x3oZykGdUq3mwj8pDqaraVvwkgjsuV4BfQsRVJzZhgs13",
  "key20": "tJemUmHuDxnKwBfTaVK6ZZWBFxP9WKCeGtWwMCBRTgDNbbXGeWaNZqfPkvMZ7MeCkWDd44hTtjJ2vgTHmj5j49f",
  "key21": "2pPtWAeRmHp6JoKMgqn5zd4pLzXJcbEyuaP4624G4V8cY44W4N6hRZKphFXXzFo9SQSTJsPPEsKumF8pNgEn5xQ6",
  "key22": "5t5wCnmWUn8vRT9RGe1BMMh86P8G9QfyudvhAtzX8Cru42bgA9SvTQnN7F34HMk7B9ojHcB4ZQNDeopTUXopgRJf",
  "key23": "5C7SY8ywFW7owQnzc1n1Yvup5jBzPWHQbQJR5ih79z5tTNRQ13sm9NtezK8bnJzv3RyFfmUQebzZoQmKGRAT8zMQ",
  "key24": "3JbKxc8DAJqYREJzJ4BMuwksZXbBrsjfKUTiTe2YEhT7T8qvBvVL3ze4UypkAyMtqPSrAWic6t7jiqZG6asPCpWR",
  "key25": "X493qKToiqyYDGNmgsiANyxjgFKPiZxf3nGXeax8LpA8dmcs9uy43kSa45HL4zhXqbJ121YS87chLnWtXsuk7JG",
  "key26": "5JfBzyJuJfPLKPbCPwQhXMx5roxLDcLyq5oDDc2vW9jF24dioSDYUDzYLY2cjMJCPZXnXq6EihmuxMnnDp651kfA",
  "key27": "3FHfbsdnUhiJ1P3A9qJihxJVG38LqaharUNUE6YSE2faPoLp8qgFCrC9AhzbFEFgXrfcpwyprLURftBfn9dexHJQ"
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
