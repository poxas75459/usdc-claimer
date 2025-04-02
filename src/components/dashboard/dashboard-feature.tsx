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
    "39eqEF2tiybaWdqxGfUzJZh6CLuByGyeCPCcM3wKXfmcF8Vc7YvnmSdhZzGhsY2FETX64K5YuopGc2U238CZbbeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57KEnMtM2TcPSXUu1hebnW862jMmJBbYS3MjfV8PN3MhKnJ59iKuUA5BbPrFaRHGB3yuGgPVTuGaayKmLxiZTcam",
  "key1": "5CRKfLrGbJogRDrLaQFPn5c7Agd9MFvkN1apB2DJLBUkWky3RFMB3hEnnWGQWmqmUj2C1FzS3BmdYCkWp81W6KiW",
  "key2": "4zrGaYbTTnyTS2k44jBdbQhxadRh59BcBxRxrWKVJzt3dFn1Uwnvyb57jaQWpYQMD9MRWqjJUywRVdNoScEYdPCR",
  "key3": "5BBVxH1j1asKRrbeuTPbWHebWsqvgWm1wkNbjc7Cjm7sSRxCiwSwvELwghgJT8NNtXpg8QnZaAziBNyrG9Eyg5K7",
  "key4": "6XU1bSynnmvLxHEhFNwyK37VDChBNkUhx4YcPPNL89TYeyV8ek3PUcXPEFBRVg4jextaWxP5iedsJAAU9skqQ2K",
  "key5": "4Qw8phpbFFgPPSAFHXWAbSDHAQqN1XFMBAsoDBPUqZJdXsH1MMk86eZGRo8m47T2J9yFg6BtBg7xufKCsxdaaHsU",
  "key6": "4RDp3oKTVm7va34NsPpp5v57MP42ZRf9pS8LJsfFHRB1WsHNTT4JX9FVPWME1Nwo48xu8jfNkRFvEryyx8mYa1Ta",
  "key7": "4LuXMTHkJ3CSf8aGLB4wskBuWEq5kS1hFVQqmUEWoPDJmoSb6tAxXYiN4iB1kSLmLPnR2LMuQq7KZpc114eyCXzP",
  "key8": "3NaqPeQ6eRqqDcbb196c62akEHbEgtoUjiKybjmi2AetSU2xTXNnAQm4bK2YQcYM37uqhdaBBGEbqVmoDZxz9rwk",
  "key9": "2QDiFLQxF6s6buRg6qgi1j6XrecFBE5evKEFDvGYJwThHU1ioTUhxAEhwzupbUCVyZsGBQ41xBRZjEX4LJERUUMd",
  "key10": "2Uqkbg1C7AbWNgin5PrW8pmoXNkPkmyHUJzPMjGfxMYVKo3QMtc19Pe8aTLLzrx2PsVGDGQvrbrff415nBcogJY7",
  "key11": "2SAD28sVFNJhr6UUVPdkAEdk6eqpQMWZf6Xj8DmM2TGD9HyJ7MaQ8TzXNe3FJnrMKKHtY3YjVzLTNWoKfCvtA6wc",
  "key12": "3zFkD3ExJEcx3Fs9pKcbZJwKF3TpmBjzsCPCZs8BEh2A1cC9MjqghfckLFq5RF1DMKzPDCd3ZgyqybeGBGEXdEuh",
  "key13": "3mHpFez2ttkBHTNryPcgMGXBccheUtTCFGTLQjTiepwDpzaYWwhvUr7RSgm3RqRFZRFWTxYBroXUzvCv5XXowfKr",
  "key14": "6591iHBGmjMpQjZXoKTgkWWEFgWnNE9xuohxcBHci6ozSMK15boWxEQfH8RLtQctpcJcCsp45uMhPn9ehN5Ju2EU",
  "key15": "32xkpJ8bgiANrFcGxbhUjqwif725MaSiCeZpxBLjzjrLwzxNAUx9vybyWLaKJwSarXnPuqu4f81puTjjwMF28mDv",
  "key16": "2VUxKxcfoLJcasGS4iMbisNL3ZHcidgbuLf85mHxq4jnrVW36haH2YK9ZYCoJo8jKqFUQce42MvyUU3PuJAfZzfd",
  "key17": "i6UmsEbW29AA4Ybe84tU8MK9XiZE7W8WhMPBo7dNbHvAZW3KT1nm2EVEq9Xgwc8HNBv9XUPysGHgcwigoQKZk2S",
  "key18": "4BV7FAtatXdneQysPc6z4cTzgZJjfZ8f7ZZEurV2o4zYoAfyd5UERDjEmV4MvXDhkNSBhW2X3NVWJGDXKKVKt58C",
  "key19": "44LhD58oDLd43HwXn43uHJHi2Wy7GeGytKoDr8yxN3iMnUDWJfb7KkrVdZTWaameKrSrpfR2cZ4Btn47aoxiYTwq",
  "key20": "3xwo381bisDByvFsAgkcuF7vCtnWrgWtHhGAJkT4qMNaCqkfyzLnFh3UrAvz2QTS76yy4KB4MJpfc2fSFskdeSNz",
  "key21": "6By18qcjojmesin3enyqvjjyBV7UVyxZrtXDynJibV5nrupgFMGNgEwrbDCok9Zr5nBxzdVeXm5DKXcgeBYVaMM",
  "key22": "4Rff5pxote5N5C9GERPTSJ1Qi6aFN3qghhfbw1EqSD2P6ATJU5GyAAduzpdT3pusKPr3nJgMR13awanBuDHqKMk4",
  "key23": "3u2rLrZDdFZ3Qs48jwyXeyxg475X3CZkwPuxFz9emzVjftDgsWH6nzPMCxVokuN2twvSPhHSH68Vw4pp46FMkxN8",
  "key24": "4xKFVGQLuiXaZ7Fz81n9ycF52ooFcARcpCRXYnLsWaeH1SqiiutVy4x1bBSvUMUS3cjaWbbDPR3wigDQvLjHmf9n"
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
