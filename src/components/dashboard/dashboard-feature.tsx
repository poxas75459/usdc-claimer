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
    "2tz17BwHRoiqDXCDXEqeCjSoFdhqm4sRJumtDhP2VY3e99ihv7wmyZvqxKJ7FYeJDgGDVRavbSTdUTvU5dFnhQ4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1xtNRfDBs9C63HgjaTDMp7L7DFN8TjcDfFhYXXonJwe9WTTC3QHmFkyauwJ6pYiw8qS5yCaLw1fVMSpppcdLztD",
  "key1": "4Y4vXZLbPyU9QVSxL3Prq1rDnk9Q7JhsktQzVtLHwwgYpJWfBr1eamwq83YkMxHyU6DXP2FDb5kQvPfhLSa6ZK2s",
  "key2": "4iE65XYjYDxm7SygSPcMEriLZZckCA3G11pWkYbCTGNYSy5NqaVbDo6GeiWdgRDCGNjyDxSREYeSdNwd9zQEW3qZ",
  "key3": "4x4sRx1BsJsLXK8i4GaRgVuPWLDhHBQoigTEJVXfA3VB8DRgQthtrfvER3EQgjUvt1SG55YetqFjLGv2m1ZVhPEf",
  "key4": "9SyZcRkjkiQrXzTeCu3nhFXkjt5GzCRJvN3nxhNnRbnaGsXf4jdTDF7YQ9XSTJG5sRR3PpizovJFU6PCqBHwHFJ",
  "key5": "2mbE36GjpCFAP6HZeqyDVsw3wUgsdaCNBbDWs5de9kycqdkQ8oc7DHS8vGWCR5hJDMZK9F6kULG1rUzpL5aopuVT",
  "key6": "2hc93QBs9GG8a8jbjiCiqxoQNztcysFfhYacuKpFn6VY67QDMrNr2gXsLTJxdkYyiKNSoZ6fEwqRQUEZkxmbrukr",
  "key7": "2ZFPnhrhUdeEYeCFbbXXHBEuYu1gX4PnkfnFYiCbDsDb3vny8TDmR9VMwhWNWCAhduN9zEL74eVisG2gopXNMMse",
  "key8": "4ZrZXuYxbbvq5PSgUWgrjQ5uFNbmht82WAanZHJ871sRKoJjva4LGhovbmKdLHHkuxNUvSh9Kf2JJcRGBZ4kdxqt",
  "key9": "3ZE6t7KAy7GgvgDg5DNkwqAonB35JJVSxLQuhCUMEUqo3fFSTxTYHBUTqqTEbtL91xXjQpiAfcTkRwq4DK3wVhft",
  "key10": "5nwuz4pGowcYfzKUneHJu2ya3ffJky7trdMda14Z42zPZaeunmDzMEkBQMRpitvbwbmV8vdNYF6juHeQqoKPCyT3",
  "key11": "3MGguFcKSdSDcZM2E9g3jMgsMDdVfcUtsBq8gLcUi5qkz6vS5sAtd1TVHkhzS11umERv1vg1kzoefibtnQu6zqnm",
  "key12": "5LZvbCb1Y7wc4rSHs79BthSPg2V2UPyyreRgLRsRGE4AtP3u6MNZSwXBuRuPj58fYqoPbJQgwWhfL1h9Y8XBZufj",
  "key13": "4m5kG6Hd61E3f3Lch456nJgU5Vg3bfWiF18kaSQcADEfjGkaij6Xak2FPANVSEaDznuuksFQ6mKABesa1wszFBXf",
  "key14": "5ApvpBQS9pu8B9y5hDbELcijToUu73aPKkG9551Kv7bC4zUVS8S9crJxrc82wes8FZPiZxoh8MT8tS7Ff7S7Jk2G",
  "key15": "2oL3BS6za91YuN1vxwhV6RPnGCZGfzQ8K7mccmyUvwrjP2wo8eZ24mQtECEUVzEzQT4MZkN6tapmVvSx1ihNuJUR",
  "key16": "5tFZp3aXUKioLhKTjLxwBjP3Y36kPK3CTthymCVVS4W4UHLr7vpHDCABab8ZdhkfxoEqQ81QtPgNPhF6YbKidLSw",
  "key17": "4VrGSrsQY6ukgpc2gdiMbtR5xCf9qVGSjiAH5eUWJrTSRcTDVuvbxdtSW35C7FRYv3P1CzNvRgKYNismYce4rcBK",
  "key18": "5reiWiXtrpif41xQgp1XSPh8GGRp47pGWH1hwr4eV3dmSF9mQJQpggnDBPZWKYxigsVwmMyzfS1vAHqGoCNwoXRF",
  "key19": "4neQh5JRv9fX7Tp8y3kF8PPRDYmnWegSQKjkHtCaH3dXdvcHdY89Mty6VMMEeBCbthK8UayhCtFqkT9DhrNYcAvk",
  "key20": "4SBBFJRPjfDhu8doqs9LCCEEU7bhwBy6cgmWcyMe7vKQR1TbRqm6AzStQCHvV3i7FsS64xE1QJBMPP6bWDkFkftG",
  "key21": "61HF4TbqXEbCi2F25cMcL1hzKWiJEUaFjx6dtPSPxKL6vQ7jvgV5gNt7A4SpVpCBu6Ue639oTdpeRgfZPVJrbLdU",
  "key22": "XRZceDXQUharEdugQv9wskyBXrtrRgSSXN7Si8TXJosXQAepkKnzGeJ6zJADj5b7GaatCBZvWcXDYvHYLdoDE6h",
  "key23": "2urm1VQP4ygu6S4ExoNJvLDd3UE7ACwarRibk6hELj7uGh13hVc7UXTj5A1DNqmdakzuoEAvwwerDFz3PsWD8k5C",
  "key24": "5gxpvRk9JLKkvCyXesnkhjewuCnqtKB5xVSQtfTQiXh75JQigJzG744ouSWk1KxiHdQ5oNmEDJNB8GxU2L5ATEPJ",
  "key25": "2ToJ7c8UYgp8abaCxVwxa6gTruookzUSGejzL3d2dLNDMj5LBLh4WFzHe4d3mUzrKfZdyzXSvXfepsPHAcQu2umS"
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
