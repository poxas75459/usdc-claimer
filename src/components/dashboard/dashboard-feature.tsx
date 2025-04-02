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
    "2uCCirBzYrvLjqW27yeZJGi5MaaSU1iLFNKVwAz8mXMbhPP8Fr6cS4vwayrpqb8se9SaiXsyDCp5mjPH7jrQNU9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cpvKH68hhzrqcQEDtkTVfxp89hALBUiNr9RyzFaBBPWJW8Z2eejBamjt6rjqBpFrYWVJbA6sM5aq3gvrqvc5C1t",
  "key1": "5a7yEe1fn8N55gmHUaGnrpUmhGgPKzcXdvfJutjNKgTpohxXHiyt5ypDhBSqGfq9KEYmhX1GfSXLFuaXCBVPM5AW",
  "key2": "5ZJGSEVoBnxjHJZ5X2CwSMZkj9i9eHBHwhEywDAUp2ChHPypLQngx1oP6Faeuj6HrxyqyHR3VPmu55gjddbup6qG",
  "key3": "42u2jWdQwZL1dN75DVJV1pnnmbzeswQdLngxWwitSh6S1gP7Gz2T6Ly6uux21bYh7aXLfwxXW1mT7nDfy1xrfSqh",
  "key4": "2W8JyYjTdviSgERwdnZaMbNoPGDXa64QrvgVTe4hyjRFeJ5UzsSJCWD8QpMTjJDWReynocQrAwLqH6bkhuRPZZSP",
  "key5": "5nxkdnbnBZYRa98vR5w22YN4N5HcseqQijZbdgRZFwYXRXu87aQiwfcFVbc4Zsva9e7gdx263Vsipop1KVgqusMn",
  "key6": "2WuFeTVoXxDP5ViZhHopXbjh1FofZwh7i3PsAskbLj6S2V9f6N4wtCgnWZ8JLP1U4acMG3trxPDrFf4Vs7vRyy5m",
  "key7": "5um3b4fvnmajhJnADhLuAVjv9zysvxrLpn8azimDFyrhn4NUs5qqoCrKi73mrLhfNMcrKkKF1G7NT7odKA9cpfgJ",
  "key8": "4Q6dHjFQkYJYEgzWY9EARwkKaGVKy3Crnbw4iJDQdRkCTXfX1Xaf5Ftmy6X1ATCxDqpf7f557WxZtuC5BvCgC93r",
  "key9": "5ADQC93eSZSZLLTtNe3rDP4T4qtZjcq7yG8Y4V3UesSXParNGPDvFMPvEuFBFefJF6z2dR2zsQ6dREQ9GykLwzKi",
  "key10": "5AfTGXhT5a7s4qQEqvZR8zCj1bsHDBop1rn7VHGGqYfkMP88mKLcVDmC2kERKVGD78Xtm9ovsCs4jymegNrai1Lu",
  "key11": "3FgcXWy9iWH9JrpFoP38CXaKB4YpjD22NiEjJyWP5qpoueVcRmy7mCbLzGyGSmJMLpQiyCQkWfkwFzNqyvRLqqb3",
  "key12": "2ovxugSeZRBaFreEYnTuXXUfw542nV7sS3xzfXbrVHo259U19Q4FZ5pvCoAaKn32r7nfunr1v4KnRfJ6czndZpHH",
  "key13": "25EWHCX3KKfZmjeg9eRGbki7dXiG6CHbhetCTZPAV6BBrFqPu4stEAS7pASkZADCB6bTHR23VSEwruionTGbgUY5",
  "key14": "29ettGX3Mg8TFiaxfyGhJyiPSUM5sjyKC6mTM8ivTbAFZv8jd1EUyiTDKzm722jXaoeWru3wNFzMR82DriJN8rkU",
  "key15": "2fftoJpv3Hmvz6dwMDicRQAAm3TdrAew4aPHKjroQexMwn39QY5KRc547icvUuuXKHyqUDt2xB8pUGVP3aVou5nF",
  "key16": "mzjdvSH2LqfqzQQ3yiVgm3j9PRzhJPVE53jd3eog847LD8X4D6opLRqgy3Pg15B8ByC3ty7peV9AAepbp6Arvzv",
  "key17": "3hAxxkAWhuPZvh4fmnpevG96g1gT847krNND9CAGLwBc6J67aMTKD45TyzLbTPFMaJ4XyQhSVsDdad7VpmEd6r2K",
  "key18": "2d5dceZr1XyQC8MQrB9NeEb1DcJtooENhRCj5vqDbznjnGK6cM2Wj2rFY6AhxC4sFNk6NZ1CbnHioNpbMNMK5WkK",
  "key19": "2NwXi7a2N8HGvkxiCTW4J23WRPEy7gFTbHaiY3yN2MqqwuPwgNGqq4ePfkrm1DBVEUQ891L5G9288dR1RM8CKzth",
  "key20": "2fWWXwt97m4cdN5GB6SU3WXsFVpfotvej7AqMeoFL8Bt2DhfKNLoaPVogdrg6CaJg2KxUWF9i8eJVw4Fxu1tdDGy",
  "key21": "9Zn7Ln1ZMgW23gJctp7J4oecsupQnANXxbmKeomesW4LSyhscQ1GbY7GVq2bMVJzthMQBZL2YHwNfMxxZgfs4Ei",
  "key22": "CrFT2cEHGwGrFAh4wUeYrtLJ1KdoZ1LdQzZieZnkPkYZjBWaJ8Me2k43R5pJQnhAWKpKaDt293S5CRAH8M2XXJJ",
  "key23": "3frJ6uy8BytSAZwA3W535R8GdSCn24pkXrpbgqZg6vdnQ2A2FuXZBt73JE1azcZZFY3H6Tkzp6kExm4b6xZ4rvFn",
  "key24": "4aHyTCmRJW4DyoqphGghRhEiAGSuW5hEcJnewQGvKs1Bsye3JsEd4QMGFTkB43ssckW6DhPYL3VtZzgTuaisNFh1",
  "key25": "3tgpCUBmVNruBDegw3NjVP1p19F9v35QccArJgJMfrprSiMLXHGQJX1uH2m254Di4UtHQUDme9sx6SAhGW3QYENa",
  "key26": "2cw6VNz4eatdMzBrz86h69qz1yCAMoYQ4TrHLdd98a8K2Pqud6PFHCPhXFXyqsEbn4bEAjhFRtsPLQVnut5rNK1a",
  "key27": "55psKF9hM6bmEnk3Qw6d7p2EZwaW2thPkgKXtzMnZqH6ruLvs5AW64CuPaRFamaY2PtmAd3XPesimabBg2vGFxXw"
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
