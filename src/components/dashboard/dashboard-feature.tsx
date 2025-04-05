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
    "3vG3qv1SnWcK3ExRayy5TT4hawyzHcSwMpuKFYiamqyQbJodSe4sgF6cDNCxc1aB7c98wqvtVhSuCTB1zNeB7ced"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZY34nMNS9VW7cvMkm9dfQabR5s9AuDsvXez7WKc3qtWsWByyaMugRCp23pHLnidVCv9UF1BwdoswBrF6toRk4Yb",
  "key1": "2b2bJ4XzYDG7rkCrCjJeLYtVGhtiGNbihc4k2c6V1FSVDQSyrzAqPNkiEdxnM8uJ3guj1pyDViKys6A7qTmnoLkF",
  "key2": "3BRqMrFctwUNJXWG15zLcvbkiEmW7NDV3tu4WUCBgsr2jSbym8M45BegTvUH3Kvzqt42Wo6Nbi7mSxEK1SLuwEVL",
  "key3": "2ZdcTuBKu8uNAF1tdCHK3rRg7EVNH5waJqWcMu9bw9GkrwzoUhnyCucHPUhdbzXjshXef6osye2sS63mqHjrXB2u",
  "key4": "46hpTf7Ha7M5Ep9nTErzWrrrKgRQ8vzSjaG5YgpdtQNbr83yoi2eAznRcRfmw8ozS4c4AuZVu9GqRWAcv1Fu3q99",
  "key5": "5srDn5ZJdUUbjAd6dDEghUQNXpBhFKHvfVdz96o7hKTnuRepzkBuwHXXHKYzaqGwwviPJn6SkJMjVSWLgCDdF7Hj",
  "key6": "5kA5Px2boyoRp6jgWKZv1vEnkX4FkUhrYRnoEmXXYrPu1hQcSvW6WRvAUANQpexHmRxF5PoBtqAzTySk87Wo7P3W",
  "key7": "3bsHA78hTfxnXCC2FtycZjCauUQ5rw5CWT9BqKtYfAdNi3Ra5zxawG9on1RbUpNgb58ULZoMrgTCS28RFurWQNda",
  "key8": "X5cUwDhCnvjoGTK89CTfrCDvTvC5RLEM8B8HWVyQ6iZ4iLLPZM1SSUR1LeF44z1QxoA7efvGw4WpdRpZuAYdSQt",
  "key9": "7F15DuTvY7oxUXJqZMN6ZsXg74Lx2x6y3SzRmVrFDeLGrTicAVaJtETbe5EpiV6NzpeaohE8UwP9TJ7ngtPUPa5",
  "key10": "2CSGRYBBvKjBrohr3STGh5xkRjspdUMkxc52FnxNNJBzSBrPDWdLDrdLCJNF6BtMZPa6LkVffqkPbQAqKj19D1pz",
  "key11": "4fWvqHFHRSP6PvzmLUzCgwTvNFTmejff9AJ7wqJyippSpqCi1SF716VsvDsrD3NmAG7PUGMbbVfCcKH64iv42VjY",
  "key12": "5jD6XiGppzCGRM9qGnq3QagVNg864cJmf6JRJiic5tSBNp38NECvCRPvZXYpabz9Uuq2mxVvT1HfVVU582aZJ6t3",
  "key13": "66EPgMTnMT72nnGTdXL2eUTBvP4eRjzCCCChkNMkqLNxx93vvTrgz6wfby96nW15f2bpgZmbMvkLBSD3hQwe1FoE",
  "key14": "3Z21Eu2STBGXkjXPyjDsZGuFpiVEgKT9hYsgYNgJu8w9x3E3hs3PZQqjHc5XaXFPXDiUAeG1JScpS4bc1TnuThWB",
  "key15": "5ZzCBngYHMWen3J442cKFBjSYwZxAaVg4StxDzJvPNhtSPHPrb3gqTTBipEc1WQvFVtXizVHUvAvYR9u6fHawg3C",
  "key16": "8fY3kRU1b3gQSpazCFb3JcwsD4QkV49Y5p1CTzD4LzYvMCkfnHsia2qQRtNkbQQa5ZRqbkyRa9c66FnA39RbgL3",
  "key17": "2R8h8LmKUXfDgQ4dk63DP7aar4voMHoEgoRG7r2xp3542JaYbCQcNo6mPFMGSHrdvMvh8RZ91sfyF5Mop9dBirzv",
  "key18": "3PnAA2GDWk3kjrQMbPnNN11iwssuWmUDCgLbzBQ6XWoPQiJWsD15m6JXQ4UmK51qPjAt7x913eL7pHv2ryJuj3VR",
  "key19": "VsgtXKQZHxgiSiYdEtbs1KZTY25CeexqUDqjPoYmQBTT8RdKrppm1UCkureQqRmYVYzAusLWdwiQSf8oL7px1Z5",
  "key20": "2XsMRQkn7CB42ndb2AtchZ92dgatP2Q5spCMhmiH42SiUSsden6KuqZBjSn8VfRJhCvDV2VaxjQ84JNRLdh2W4Ux",
  "key21": "3zFjHSohvzGJRy1LUJZF3ZHQSpfqEdpPL4C2cHuAeDzhBypqgrwumtqxrXNS3jv3t7VFaWzFJhi1jqXbaRJTUKEv",
  "key22": "21EBZ2JXyda7atf7TPTWUxRf3iGMFoAWpxqtDBjiJe3yBGvAJmyjodbZ4R2UT9H46y8CgPsyUZPJRH5N2uMN2bRi",
  "key23": "41yzuH6z6GJDDyPpQzJRRRopnmhFDVMa1JETvPQMeWLJRhRtKQUbEnYZw6ZXfAN4Duvs7mzAQvNzKfnREeCT2sX2",
  "key24": "2KvvXd2c9XcxnxxXrEcQZKnMiQUEohk9iec7MkjrKqBEhomgsMnm73in36w1FyMiSVaPjsLFDDEw4otzEoArNCGQ",
  "key25": "543qsDquCeFYXpWWfV9pCye9aMtwj2z6f7gqmuMS4Zz9bxhqet7aUTEythPcYmQwzHUGDLG43nrbcfrKissg4FcZ",
  "key26": "2Q6Y5Nee3FcB9fi9X5SCMJqatoRvpLFLsqFvUX6FAun7mZ4CxduPTbQsgEwTmJGLYHizQuPPvGAmy2FAQiXMwNVn"
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
