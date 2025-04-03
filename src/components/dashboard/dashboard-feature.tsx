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
    "gW4siMLJb8E5TBBhTv4ns74FLnV4LF2XtwQZQEGfYPp48oPBVsZV1HcGzXk6zx6wfcmwv2hngc7o4cyUr3ihVn1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PPrNR2tCfxt8eny25wq9GpHbbpthpappkZBjDoZCn5NgN66nMXsgAByByTRKvDw4GebWr6uvaFa93kWLvi8sMdn",
  "key1": "67eac6WFKirPxY3DitNjspJat2wCWNEZxgBYTrHjvnqKKqSXiNJbMqsXwkcy2FHQrVizwvnGtCdL7ePf9RdX7kdV",
  "key2": "5rsyMsBsSEfrJr47mqyXAmgvS2Ve5QRPEC2CWpwVdu9LKshwrzsUhLCQjaT57UZ7s5LJrzCFa11s5gfhuLPBQm1W",
  "key3": "29m3LN945J4EqhqfAxxmXQ8iSYZKw4gBH3LknY2d5yryyKABATeLZBwT9ry8S7hqLiN2dupFMqv4HCfoV2JY7J8v",
  "key4": "3g3XYiBmYvPTCHkDZsn79HHvvt5Huegs12m8ETYQT4G2ufDby6kowfwqzdFwJFhgeTDFkZqccw4ZCohib9wzpSVa",
  "key5": "2qJj4EX2XyRtD6pRypgDNsKB7equJ5KkZvJrid7wScbubSH98DSrbf64xVV6xeXvJLbAsuUjJLy1tqJD94amQwxz",
  "key6": "gnYMtvgRyupyVCPfQkuogzVvoRTMvCgq2ncRMh9zArcT9tXeALvcrqTirkds9MUdAzxbwZMs8wgJPyrYJswusro",
  "key7": "2QYQPNvHTgvQUE9AVc3vk3VHzszS5K6bHrufY18LzA943sXS1n38TsB8FbCiqs9UesxeXKwzbR6SaEK22qGSV43K",
  "key8": "43UQPP9LhoLH8yyt3jG5wEZruLEYh5ERXs7AAPiLZvuDYBcc5Vn5L2v8hyKMsGEohtLtjbfjkkdy4YQ7wbY9Sazt",
  "key9": "3EKh1MtqVyVwhvdN6UrLeRenYFEYj8qgSSQ5p1DEBQj3m9JnSLqwhq1mVW6CEcPyjEuYwBYCcyJeperSR3Xtztoo",
  "key10": "DEaRi21th1pQ51s4YGRcwxLi1yojrZwhfLdyab2GXnmKMySeRUnQ19Yvp7hYjXrzquMWvo4mzt67LKkT572wuA1",
  "key11": "5JCJa475XngRdNGWKgbwzeXtZdn3zBUviW8bGxZVu6ZcKH9MdP1kqXDWnbyQZB9eEEMfzwCfpJpjj1EXNeyjo3Zj",
  "key12": "5aHmA8UN72AvFnpKepJUQWkYtrzAH5ARKzJ8d7FfxsbQ3mNVacJmgv1DEeP8MQ26CmvnjQoVQci6ibJ5Ytr8EH42",
  "key13": "3rKdFCE6ZxqX5RbbYiFmG5q8pBjqozvcMzPUT3B6PYT9hNVzh9Rg23fo32dQCCUdj5Ka23VpWgt4DSuH2safRv3E",
  "key14": "4GsK5M4LcCv13HnBmFJ2EguQB2GbYkRYz5UGHHxZEgKqaTkvW9TnJoS5ELLHJAUqTsi8Rayan8vZRo6trK3U3Z57",
  "key15": "dG3nfsNxf9qW2r5xiQSbxVPSz8ep9iGn5YZuLk9AtXcwpmBSkJdiD3qoYvwRNtBfsWJw6vBvRp5j39yiiz1kugx",
  "key16": "2VpPmQNvdfwDSRs7s3NfcJyV9rHokBq3qJ4NgUNrz9sAEHw7N9shmqohxVjZSjPiuEmatihkKBYdVkQqUgpH6v5w",
  "key17": "3Zd6dJgP92DZDR2v6yGMDCSxBPSqCSBZi4DXoTYD21nhpLjo2NUCvSK9o4eXSZ9ktWC35Rm3vGS8yc3B9gY88Hqw",
  "key18": "5toTVK2KsMwjSL2FjgA7AwbyWRJ1suF9n3gFENHDiuxsVG2rwN8bTXdwsmZ269h8nGvC4mRXYEh7q21YpszJT2Xk",
  "key19": "2kUEECBGHmYQbsLFqL1sjSiHYARwwDLFKLzWGzUC5urCzLhJFdns7mc8shBsFrDpXu7BaWJaxKb5qGqgnoTbYHEk",
  "key20": "CbWqMi8vCYJZFmcGbmG3M6QR5dVYvD4bRCV8hpziBTR9kmnGr5MhMivsbkpXiTvbnw8izL772P8tdgTyRuJQepb",
  "key21": "4Ff3Y4X9YoU47YPYDx58VyZUe2xdTBSK1VqVQdseJZXRtkMWPEktjxxZ6UnCKJnN1S94QxXoP8ewczim2ZjMv6Zy",
  "key22": "48AfD2ug3DYDXzN1SXLengmXB6H3rkys6kqwNFP7XciR5oFHmn8eBN8RsrAfkFgE6Y2Tp3jchckEic54PBKQggKd",
  "key23": "2P1YPWXx6bmbM45STZR6QWHtMrqMkWXSm5idchJ7JousDVxaq35633mQnBQYY5Q5CGxNUBAYTt2WhNGBcHw5WxdR",
  "key24": "3mZu6LipjeSeNEKMK38mqTccKudeUNDY56iHW53TKWeVq7t9jRoHF2N9mHtVgHhjb85Higi8ZnS6BE3r8pwLat83",
  "key25": "7pqYEPWJEpe8qzfbmhgSnVYzYUfdK8KF8pvEUKX9LHCDLZeWx55MyG7MKxBU8GrDi6SKmZa5PtJTGNyjE7RJqEB",
  "key26": "624fjXUHSnS6LgXxsrCMztxqNt721UEk3xHjtV67UakQb2JtoGRaixcNmsAJhND6rR2mm5DaL7TyRpgKzfGgyfws",
  "key27": "2c8GYMooyN73EwJPdNJp86ifwkdvBb54wDGXfgsejX1fCjgLYP7CuDZyhiZ6YMvrY1rc2CdqRTVV4mM2LPrnTTc8",
  "key28": "3xkPLzEmrhpUJmf5f9L7ikAtJQqoniyXgv5WKbkdS97uybknSmPvqwpFbuwMhm158ZmYihNhz4QxVRnZoQGqMoTm",
  "key29": "LvCwJC5E5pFQoumQkZt1ng6xM3URHF8sMWTc8W7UCErhTE7XQ8JLGNn2xDeGDevMA4RoUWVwf3ALn17e412bpmW",
  "key30": "3MJNefWqx4toXkVffuffjvacayhd4r7efCxYTei8KmiCFUtarVY7YmcTFjz7uEhgiMZsZnhnzpAYYn4gAiG48jE",
  "key31": "2r9xwEUv13JosgcXA5MGZj25zoRVy8VSZzdmkC4z7kBVmUVTKhmqBUC4PwFxWRZu9nTBHyx5QzdU4bDrM9S2gLg9",
  "key32": "hdiLqpMi4wTsGJVKrZX8uKECYFReMbr24cK5WVoXUzNgCbdNY5P26fwHkfpMYp1RKa5Lwpys2M3P31qhnkjUfoD",
  "key33": "22DrxFB368Gwfc4DeXwuBvCYBFU9vsBj7zQyTeJgAiRRqmvH1funf5ovvxbSaifpQbCzUEUuPUHnGNeRs6ag1TXq",
  "key34": "48mJsWEMHC3CpfMuPwUj1pcahSBqVF97qXqNv4rCiwQ4GUWmf2LLp23nU56vnS7brwz2ocZxSHdVfXBsrT27C2Yc",
  "key35": "T3pHiACChNPg83LqASzk4RZKhpP9JMedyinmMNWdz8g5jPZptNGkxCwEqQouAdB6K5YE12Bho9iXRvjBraCb6TV",
  "key36": "uvwagCfPRmzfJLUT8EBYTj7xdqDx6yvK54aHwrqHQBLJHTPuwaWmdUMw4nNNxUxSHQ5BYpedT4T3RG4QZV9XweD",
  "key37": "2ZAYs1qFSNLkBDUkGApEnA9Trm1HjuZMB3bJGps3Xh9fFDy41YMV8ncNPc89a1ND4qe2wnaF1zSJXnNF2H6BfyA9",
  "key38": "5WKsccKecNiBvgAp63nkTs6qJWsoSeJ8vtuYcbhyJmSGgTxtkDND6TuCwm9hRxCg3znQ7ZPS21CRXgnWmvuX2pB2",
  "key39": "5B4p1JdnGuVZqycceoqSrdbscawqthHvhHkaDGkDEvEHSEtBtXSWV6WxYA7aCoMkC8QZdcsoVccdjAXRbyr5Tfit",
  "key40": "tQHkrkyC9Vud7Qirtui3jWUrNz6xVgd3hhrDuLV93dyHYoTekEPepXCufGbDd5e4KB9PHuFc8SGWwUtdpnaxB8X",
  "key41": "BNs3XmPGtFMVogJFqroiGqz6piEFcUEW42XwuVCW7DpFUSXhhu2LGL5D21Pi3xAopTyPKC9QNNCHFGgk5MdLWzP",
  "key42": "2yfCqFLLDTctVar2TZaATt4mdgAXhyTfiLZJbt1JPZmvnVU5tuMcYudW2q65YiiFgApLnALyPh7oDWB8FvUNcR5D",
  "key43": "2T9C9gcGMcHWeXe5WzK5MKPsQD7vLaunGXVPtchpCAuny9PohoEcTd72zpS9SvHCyWK43P9sThCaMqGiCL4gZkoD",
  "key44": "4D8pZS6p3rVrQ2m486W49thbCV55Q3NDjHka7r9ZFH9PepwkmusmxsEhaN7fcWX2RefU43DhAXTQPQrhPAhuXeWQ",
  "key45": "4djDGk8Tx1TM58s4j7CYzym1zwmA8Ka1m46bCm8AZXfDYNS6eb9JkCu9qiMqdTZrwdLmk5reYFZocEGApbyJvEVo",
  "key46": "j9RX5rguVabUm9FdWvah7M58jdwTX5AiDWJkkqTRZQMBZ3uwLhko4cuNfWWbddRm32Y9LL63yRmMatVYHUArDf7",
  "key47": "3TdvnE1D3WG7AVM1FqkBMoKiUuYGEzEfxjbKEqf1LWr4EnvwfqsqzFMuQXKvGBM2raDXiqEq6Qzt7gRc7HGV1x2",
  "key48": "3mDxPoSvrxF6ysuZ4NfaG4gDSX9JUX2Vs4sqxiQwbcmuc2te1R1rwxXdiFEpgVF2z3MTVcU6EcmvLxB9Sx9F4piN"
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
