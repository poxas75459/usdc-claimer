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
    "4sCnevnW2CvGBGwZf1U2kxc9TKj2HEgZjH3UPq7ytqDS2vtfnrvavp6wn6ZiyRqvpTo8CXEAs25JLeB9qZJbXhKR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rSemyYgppzdJJq3Gjkup1Z7c158VL1JatYRzqRAeH7uV6kwyK336Wcc2iSyjn132VikWoPZJkNErTooE19rmA3K",
  "key1": "2f5Qow9t3LVdgpbBMh6AdPARjmy8REiyo6WA7i6UyZTarPMyPFnjjr7mgptxGhnbdruPjuxXyLNvUjbkrsVeM5Qb",
  "key2": "2zyPLxiv7XVfUxYJUSAJdQPCqn55rDNp5XnNpDJLmrKmGYa6kq2U27PF6yd594AwLuhYUJ7ipXtWHupV2nuwdZJv",
  "key3": "LpM9YkAXHPQQ8LRcYmK3PvK8o1UY5ioCc8HU9eqC8nxXiz8t5iDw6zkQfVVwJVzwZNroPUzhLpzcvUQF2Zd5Vcz",
  "key4": "5ehvtV1rdBWHCcMREWNb3695UiXmzngsRubrNyTEoDtuxmxSQa7Zgkbb3iogLSKUi5cg7wKSBE24xvDUEtzYt6tk",
  "key5": "5unbRfNiWHByNwA6Q3RgmBi1nMCsXyvyp4nU7EyKtVhcKY8bxEB52mKh6D3j9EWMZCxth3iBt3xV79p1Q1yxiDxZ",
  "key6": "34NRthNd41Lxy62GyB7tfAqcr3fQr2xfLWG6tgBDiF6XD96svjrmLtY7TLtHXmusdawBNbLmwffYbxxD3fvEBYPw",
  "key7": "5NjhswMGjrQHCVFZCELB7XjioTaMmjUb8UoZUg6VZW5jrDagLH44n6k2gMguZHhg32oTcqXsyjK7L9hfXFX6mcmn",
  "key8": "3F7hHJygJ8MGzcv7KS3f9d1iFGKLNCYbidVxSDB6wdoHbBYG2xgLZvtFVAKSdmF84FfrBGYeucsmAcPUpbBt6Ev7",
  "key9": "3oMbSD6CKxeeLDpesiyumvkecbmhgm9TToBm3fcWRyueiMoqsTKVBdgMiofCLMuNGjoKqKDtRozSEe8ohBLAECCo",
  "key10": "2Pg8spJ3HpntaQbU2dTRTCKkpMMahcX28CzA11Zda7co6Jeu8Ag8RHCG7Wi5QnPAeAExwyXyDKaGTnERrQ8oa4Gj",
  "key11": "4Ww78su12bgdQVQ5BxniLphidF8mbWWXCVH2WmduYK3bEnukpoh9DaXuZTnH5xcC9BTNdoWL5Q6nvGGvhP7dgsKY",
  "key12": "2VCvE9r6a3YCccXVqa6izRjAQih5zHeVEZEsXRdKRv3KBG4KS9c4zFj7LEtGzgzwvxtKWRUP9NwZvtW4R2rmRhJk",
  "key13": "55KpdwgqUWqK5xHC1dcyCTFQov2KFuTdm7JkuPH6DfJs4AVuG4SVwmsQYH6h1nq7L52byiMbzTy3tT1Ht3qHLRGk",
  "key14": "uDwuY3AcfDZhuids8VsQKcfUr4Ahj3131BCEfyeZymYoCjVfTGQc874ydvrjzooXZxdiyFq2qxmEJ1YSwqJFJin",
  "key15": "2PMg4A5n3oGNGoR8EvUhk7M2rS6VHi3YUMwTSPwX58pqP9jhbvtiT8B21JE4d2G5BEjzdt33EGRojVUJGxf2HaEZ",
  "key16": "4WhK6pocz5qWHP1aq3GV7e3FeM6CKds4DmM5tDJRvNtogLDSn5HiazAn2nVkDMapjiEQTCC577jTzoJxjqbiecb1",
  "key17": "2U6MDE9sQe333NhwWmLLYbDDn7QVzzunskZJbiLqchKJKude4MsRzuso5vkDBC4LhYZL3HhGhkV27bV2QRU1W27m",
  "key18": "2dJY7THFCTT1krvN69Ro4MXGi1RhxRHaw43L3bA5sD8vVXC5d1Rb5dviPuYvBShDYiJNBbps5HgHQo2GFwiDtc6t",
  "key19": "262MCJmjUCU2rzBmDxXQVmeQsKJuWwQDrf6B5TsogXK2TKGKK8PTnTdCKs8o3rhJRNjgnwJRbddUEKGLw8HJMqAj",
  "key20": "4ALVtJFDULxK5oU2BRnAXBCzErkXvToqwFjWpcuLCoiBUZ9TkrsbYyugTviWsNi5ysf17GPPAjiH7FxPwm5UdDGV",
  "key21": "3Bvo9n5X95D3QfQ2WXRmdCmRWiNDufwjc54PoZt5TntPerU7VLJtES5fM8yujJZAiYZRDd8pSn9Lv8WDdFfrnEZS",
  "key22": "4p76CQCEWQfQqXfWeWxeTuvKsuPsgKPjuGBJ9TDrjWQbEtG2MQCBBSMXv7uvXHXGiQW6jEEmbKrDZ35sY5dqYiA9",
  "key23": "XsbjL3U6XzERvQcrNwzJLGP63zaKrUjZqCY4oqPPoWLcNxZRdzGmCAvqZsjYL4dPhWwLugan5MmxBECAiwpkRLt",
  "key24": "5dBMirEk5teDhknmG3jkrh3ToZ1NKR1btX9jVYGsJT1nMWPrbiaeF2ZrDW499hME6YpkLf7VYwHTymoezjiZ5sNn",
  "key25": "5bA5kMebvXwvcRMv93whwskjpprRfAqzE1Y43yxrWxo6ZJyTvUJ4ZRuAmb8wUNGR7MeEw348pujjWGpcvLKm89v4",
  "key26": "633DVEZnrX4VWJQjYo3z6477C8957p3QXp4ihx4Wstna4by4hjLxTRtmGKRU1VxViQbRNGBDGi7eHJqWZXXTWsub",
  "key27": "29AoScfuEXH9WRiHaPwaR8of3ZJ1FQ3P23mD9yEVzohPVMA7MtiiPuSt5HW82bn8EUeywWSWg5bNFjpEFgimZUXd",
  "key28": "45CdLor3MECppj2AgsoA6cSQxG6zwoxJRRm1kyknZgNmy1XqhHbdKB2nQEL9GfCoFE56fSj2u5VEjy91jSq7QiaG",
  "key29": "3FDaUo18oTFnXmCc1Me16jgjrFabYrcrjkxn95KJSd8nEiGzzASp1CQEzKNW6LQoy2Bwcqjcd1FhpJpHvmnw1UbM",
  "key30": "qxFGLTYUueUTUbP9gP7Te5edgDRTxU51og62uULYYepUhtDtPsFXtoCurGLtc42AQgMgYcoZSaq4k7srPt7Nfuh",
  "key31": "58pJ146JKYV9otWYcegFkByAbwhLjZECoY9Nz5EJx2QoSbAnC96emSJ1gjne4L3Qow3PTUmLAPYGYQbdtTqPdtEu",
  "key32": "4kCtR9xj5BKdn8faCk26VjB7CP8LhJ3cXXTsHwiFnvJHEPNJQZBTwYVKQLQWKuinxWD9TZRX9KXo7cqzMzPw1oR4",
  "key33": "5eyNi4iCR1iJBWpppWqzzE9aYtGPkdVYbGY5MoLYT6KYnowviEJbTkPNXjGMDmSuKNYursS66FnjueE786iwv8aY",
  "key34": "363DpkzH9RrpvJt9swxmGwFQuwxroCUygpBjvcFJpceaN68PNHbycG83ZMn7qeWFmxS9FVwMTrsyYfNwaU6oEuAT",
  "key35": "ZhxJRngxpFDz2qkJoReUZriWadTA8VimcqyPEmDpxD7GPjYVBQe7vwzjDRHTAVmXRGGvg7ZZpjxScHYuEd5UAwR",
  "key36": "3iGN5zJU8WhM3BQBExS1V122bmiDTyVLXd9npUqaaD3kSzqjbwZtbctnSDZS9GUDKDCFgyuzxgLZJPaVsWNYkApQ",
  "key37": "3rABL8ozgWsEKeoRkeEn8LcMww3jehZ937snB7NhAcpeURL4bzECGCXbMEJYxVtfv2oFkbFxQd5V6eZZ5bsjrAHi",
  "key38": "3iFLQVQ1haLhuq95E5V7epHQSzjNXZbNyzmVgYQ3h6auKT6VysqTYG9tDKpe5eYRMZpz6aRZjX6ZQyiu2p7saRZa",
  "key39": "V7h5FsYCwrpK7v36QuZXUAUbsP7kik43ju5hA8yJR7LQGatbp2rnYqZfjrfgTuRAmHpeqjrVDXaPm78Hj8EMJ88",
  "key40": "fNfkArcAyjYQmydhvVzx7uxQPsFkkMF7ByW5FHretXYXcEUzUkxTzmZR1THjqVoBVUCmzbZmRYGbW4XqQnZySne",
  "key41": "uWiEN1kwWjaaaGzwRKo1bh84noTpJ27cRTxF7wetaZwYws2e4L48jmoS89NPE19LjfpJqfHCuoyp691gig1Eeoj",
  "key42": "4Nx213iAsrZwiq1uHvjr7MDBujaVomdwqjpCBVD4t3pZZvkvBiY1my739AMph79Am4xAhU2dcCZiJYdB9npXBxxS",
  "key43": "3oBuaoDbTFZWXTzXxDk6qEkezCvipAGSj4HE5kh7BZCnXsMzqPUx5LxvKfKn4cyBCKT8DmwvMBzHTzLoRSugvxjv",
  "key44": "42nD5cbY9wLW4Bi1Sf9fukYmWTpmYBq9XDZRtrwaTusUbxwcaj1VW5HocN31TQsFWpnr39FauJoXByEEeWSqNHNx",
  "key45": "3ySTuY71HLmZjJNVGqZSHYGPsqzXBbfFS5ki1ykDp7mv3TSDZwfLXh2ABdGkkxDe7uscfhFJp3T19ZUN1a8bzATU",
  "key46": "q9HQHkRW3iHtgUF3frABn72fvE5dJWiWC8WsRcDrbDSwhmTZ91gTWf5czwnCASuts56KwRUnJdT7bZPSupS6k8z",
  "key47": "2bMUSwkd6LoXFomWXpuozFznE8ztAvhyE9yWdWASEUThGhK1UF176vxVvTPNV8ZP7XqmTZvGnpgEwh1eHzbsSe3D",
  "key48": "67dV8w3iPBBg9Z6kugsfabN5NPXfafYyiBoqFzYbGjQsoaa9eJrhRkJ1wTQdcL2nragyWsjM6WXm4YG6zDXLufjX",
  "key49": "LLg9XN6Hrre4DtseM2BtSFknrJC1EvC1HmQSiCJtP5VCL8R1xAHDszHAyk1QNcjzTPbHukLdN1xgwmbx9232TuR"
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
