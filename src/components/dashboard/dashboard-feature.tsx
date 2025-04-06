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
    "4xNkNZoEMDtt6XrYYT1nJiiv9s1RUc4MVHCXKsiyFiSxJt9JXefF5H5FaoJhxgp1gSz8jQy3WmzNDNfgczyvhjy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46rn2iNe2dr9RkqY7aMLJzoYywSKNoYp74DftYE2nxgFGUBejtU2tS2Ks5bcoFHSoXpudYWEyK8hJSMguiPnrNq2",
  "key1": "58zZDxSoqUaPCN3fXMqx2i42tWtMtoJ3N5JpDzrEHpJdrmRwFxfmXJad7EoGLYUJPFvWZm58ovkFhoCC54mdhJv9",
  "key2": "3jrVy36gf7zswJ5M7BBU4M3Uwuej5jXT65d8GHQeSSuFEtje4nK6RPKdPp79uR4pDc7S5Xww63J2xV5KV2ZzVppy",
  "key3": "63PeqSRqx4UaQHcevLBYM7AqmZqHaQCkUSpqZFik9WHFCT6UuMkzH6tYwZpuvkFhRzV4RJ9qekzwy2fmwtWu3MfY",
  "key4": "xuodnKB8LrsBabjBmW8zA7E5sUhsFHEDeizSGWzHJ8udkt9eaPVvWybuxznLtSPxQkC7HQkpMTmCHckDNkabTea",
  "key5": "7V1LuA457xsaEKorZ3MuEENrH8KXCottKFSEyUDLRmLzBS6FsBTZBnthtSSwnc5poQt3aiN3hKthRuwWZTdg7zz",
  "key6": "382wP8nwG1MStcM4PoHxrxkXNaLWNNoy5rMm81peD415Dtg2rhTni6CdSV9jqqQJUd7C9seJU2TDiPPwb14NTHLj",
  "key7": "5ATzC6h1B9BY1B5Y5XSBdUBNknU14Y1qZMM2CSFDAw7XK4pvtztUkcGLLrQoYtka1cA3KzFoL8SZie8nmdnBXYat",
  "key8": "3DXECiTaXQAd6uJ1n22AKbcPAQpYgbdtpZYc17sd9Rpuqk8A4aHXWfA9FYW66tJLABzWMDZh3UsMZTtJG7enoQXb",
  "key9": "4AbYSwRG5cFjeRLxWexcrY35SmdvcrhypxyVxL4WwepAbsXbjzHXRsAfpJrU9NLWcCM5ACSpWcbSgWcKEQR9HtZe",
  "key10": "3QGkKo5jQwYzLt18TnsKuR3poxBXUjGges88ZfjFf7e7AFEjqzcPwnr3Wyd6S8iBmzHptc2eiF6wPNrdvL36ho1m",
  "key11": "2U5suD1oGi2y2WzvJhP4LHocWbC5G9sHH4cjGLuzx911rRvx7TSBw6cdVfh7cL1WMgYp6wbJM3hvdH2uLHhjstBb",
  "key12": "4DwDuEaA7vkUD3J5mCyympLfkkzS4PyQMo5hhsoFrDBra6jJkTsEJNUEQsRgaB6gEev7e1HsNWvg8WBXwWKTJexu",
  "key13": "5vBfgudgSbAQCyEzEdNikRevyHVVn2baL2D6HU8EBtup4EiwkuVs51ZK7gut42YwQ1fXgypvmgMUoLaGmCYy4qut",
  "key14": "2FeKTCLep7twHRma4dEovoyAoUT7ziEf69RoWkHgkHFX5okFVzfwAuGkoM9adVnWgX527fPs2vhC4vdAsvSkW2YH",
  "key15": "43DqHkug3EemFZwm3qurrx1tXr8MLSsLzmwxx5dKpn2UrEf6kBXaHsnam1fyqcpjj91FVFUyj3MDh3RvprUr2MYE",
  "key16": "BhxKLeFrtPSxSDQHxihCFChPWCxT27RtcRrHX4Qt6HDetUavpmqJ4C8YQt6sS94Kspnj9x7Go2uu5Pnfk6NjKXG",
  "key17": "64vULunvWSPmuyRaL5wGTNR43oTDj2BeZae2bn3G9LQqAqTSkSuHiREPn7G9G94HrooYwRQSdHWu8ZJvBzJzQyAz",
  "key18": "3HAGSHpy9QRDhR9j1otGd2gqaUmD1vV4SGRr8dZTBA9FAWbnBeNbP7LPKYEpBwggby2jiaPZHHTMXp6541rR5ZCL",
  "key19": "4GeCpA1rd56h46FcuJogC6ivoWmSQp15oHqTssYWchjub8oJePfM51BgT7vc787HTeFeCsjroQkawvR36eyMzMMf",
  "key20": "2LpRHAy9TitE7MciUoqHznFF5rxm3YyBzpXKGdB1EYVygzuXaEYHC6GFoAhEMmJJW6VU8FyHhRtW9EnQTUCzBYH7",
  "key21": "2EBXBxBhKjsUVnn3Mzvb7myTThvKuFcVFTYpVFTddosyScMdL6zFkagwJML6oRen6ZQ7fhS5vjUYZkuCfHKomWsN",
  "key22": "5YayNDTmBJnDyCJiCbNHKFz3t2KXmQMTMmLXT8GnYXksu3SgFrMzZSJem5zhMkMDavTQj8ePWbduY9bPXXRp5uKj",
  "key23": "5xEKBzhsCETBBB6dwDasMCkpjM7snY4C2u2V6v435ZX6zHmvPxCoLg46QhLQFJsQ8whWepAQTyQZew1MPvyy5USz",
  "key24": "3Wd6Zp7bVcnafxJEfRhKFX2ZVPXWpv7VcG1SnJdqHbqBxFqhWpkUJWxfvcURMTSXDNwt51eXbSVFx3F77ccCp6Vj",
  "key25": "WbpLizoqtAUjHga3TfPaD3yeEtCB5YBM6ZGSY4Sz9ZaPGPm8jo9txTXzCVxBR7GdaMCLVpjhcafMo5EtjWg9VqD",
  "key26": "4hgXJGhi2o7E5mcTGaAyfmCsFB5w2frqhrGpmEoqifKcQdzoDchYLu7XbEfLJNKjJ6mNqEoK1esDBxpP5CPGkKP3",
  "key27": "3CkRhGopkjMbqrC1PQBvWmDDXntFXTE53nGifE3RqKANS4pDvHjMNm2nDuTrryQcjgMDavnJk2NhfL9gqW46Pm4f",
  "key28": "2yvUxV5zdLiEQtpf5EhAnhoUU2ZHJCcMMK6UUCYwicy1fy7RKVuCRc8TCTRp5LgJMqbb2YkGCCCAKp1cDc6PXqRf",
  "key29": "535QHXxs8PKyzwWoEjSKVip3PZ3DWdAT86k1r3ZmwAYUzQWF3m3XqKwxYUZJu2ujfRLJSsLkNPgMwkqmB2jhUrnN",
  "key30": "3GGAxvKt7oeRkET53btrm4DZtVfEQkF5oGDc6T5U8Y4rDtU1pn1QstioHyJpP2YAbNSkPpmctXtkj7v8H4mbaqqp"
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
