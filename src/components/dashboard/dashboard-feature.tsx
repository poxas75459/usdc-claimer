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
    "2WUUetATK2zhSUEKMeRJkaCZLaD5wLJBrgwXZVYZCokc2S94MYv3H2GRp8AcTwSUsqvHR4DVqjMC2vLHy2NThb8v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fCmhrx4gKGGqvmEDP7mfnhf8WZf522UVtoHFDKz2pz5J13kM9zmYz8TWbSqKCkEME846thizvt4m16SV1qzXxyg",
  "key1": "36rHJkx7zbN9zqXDWHNrFzT3Y9Eu3ofTymUqVk9SyV7TSgyaMkHj9d21JK5UEbh9K6yDqH8iorr81cwgbVNtLVDg",
  "key2": "kYhM5EueLQdGRC9ZB4BWFgFbgXhBo8vdfmrqvwchxHAuuD64ejSx4V8npBsxRXsZFxJ6K6AHLh5d7AjVoZKAcEk",
  "key3": "5uJjizonousqsQke1cv43jVvsf74yctSTxjwYJgEUgECvb9VTgCUAon1LwqBXq2MfLqspHQkptvWUjRjrHrEMeRq",
  "key4": "5Rj1pvgiy22g2SZguFfuVRq7HJB6mjwkQsWDTBtP3FcpbFfNV1esdhfHVLih9L4KwXYah7YzHpKz7kNJbapKvfmB",
  "key5": "4XFBqpiH7QysxUZX8WxgMtFPBrUZ2Zh7Ur7h45N7df8BcrC6nBN3yDgXGgWdkcCjWUvCCeDst8eqSK7PCWiwd35a",
  "key6": "EggCYUkVvEyzrUs99zf8SQ33Rw5coUAGpWmowk2VmfEG5foZkq1drp6htPVfYVPwePyEN8BriRNvh13A3pUFYAo",
  "key7": "2TwXvtha1LtTfbjdG7Y5otNCime9Fra9jUW6aVaDMtpjmDthndHfxL7jd6Kr87NG8dVLoyxTTpQ13vd3Z7GEd8Dz",
  "key8": "42ReLYYZ4HFwLegG8C6WY5FTHgFkT3TGaZTm5MuuiEk4iQfuDyhNbyJhNLdVB8KcjPcVyxUuCmkLADRnVN8bJmxS",
  "key9": "4YMg8mQgSP8T17iiNGHxp2FKBuEe3sCNN5kR4EXknJVCMUVcsmoocJ4F61eRcfkQh9LAa8MhDjuUxoJS1Fai475M",
  "key10": "3qMTeE3pJaetrxRifTSCZa93Wrx7LfTQQYSd8wqXngTs4hmqCwpr1w9mnxyHDWRr45Vcgf631cjHq6NNwt7ur72z",
  "key11": "4facKwiML4AESGQNKLCQvN6tWgnYCVMBha4PUAst2gvhHFb8eaCUV3CTCdgrgk8QQXYpDs69e5LDggw2y1wfcx3E",
  "key12": "5KzRjYeQYR8uSPZK1q3yh9U6yG6FsXrBC5Lo38UQqJS5iXwaDwQFuj1znWdweZ832TQU3Q2wXBDKABK5yFNeFF2R",
  "key13": "4pkNypGh5vpgb5URWA3uJX9Sdp5EbEx5gbCxKpRSUN6c62mFVmordaDjwwAKyChNbY5BdVKyFf7G1mhfddugmVKg",
  "key14": "63nyPyhRng9ZvTdSKFWBAfxFVjUHr3Aq4pjCekiagxaVLoCoHb22F7NXGgVCsvToU8npTEd8Bgp1hewKrXLFRaMg",
  "key15": "4YcFSiD6pkD9LdZcgcAVoWbC4YetWK7bSwWwGKwvxcCazeAkRSDA8BEmrjKsVJf5yNEJQtsxUcppd7opKNEhG11j",
  "key16": "TpAgmPTyeXELSZ8yhmGDhiCQYKyC3H3RKamvhFfAMdp6QLhYYkC7h81sxuZKiFR6uLewdhg8HVgydb5eHzTmSFk",
  "key17": "5EUFbTTicnUNugMvPWvLhWes7Zet4dsY2W7NpGrGgXUGszymsKiT7Ss8Y5qQPqAkMgt7SJrDmfd4GF1hJqvJ78B9",
  "key18": "2FTSMRCs2JKz8rpZ8TZwZHP7oTKo5FCWGUP2W3Ro78aJUjPpedJoeKXNmN35PJPwGiiSzMG8K3um4UbDM9Eq7D2b",
  "key19": "2PdUvwStxtEb2UdgMMSckdk7pePfvdd3SiSdqr7o6YkxqBHwZdXR1uzWpUaSTk9eFvLpgk2trmyAryUFVh2E4VBo",
  "key20": "37P42dVfWgYVgLFcNcko2k1L2QFQm2VRCiqK9n4ypk5W1xBdgzqUcwaXYBuCbDtNdagrQPbPa5nzETgQoSAidrNc",
  "key21": "4HAEoAohnHfssoPgs6Zk8RUhNXgjx6JSd1KqTMGB4nTWmYEqaYbofAyMQuGsY5KoTRGymvtybTp1AJyXukK66Huy",
  "key22": "4zmaM24fv9z4ZJw9tuUZKQ1gAyDusUb3aepsSg8jzr46XqmGvUbSZs41ULWwrP4QNbjVjW6CL2seLUXs1R3jzeCc",
  "key23": "mj1sGWLass7ut21kd2aZpxP4WUtsoujWRuZQooWKMveg8F7zDYKuG3zVPbpfeyjFxaHgKxpRszZqCB4ePLYk1tp",
  "key24": "yA5WKvFUBSy1PrU4myNWWy6xwkDaoJsh7cFhSmWK6mBWaaUbydpdAUP6NQDsQwio9YAuJ4qTn77EkXGTsiGgdZX",
  "key25": "3VVEAEoKMnZyJVFHuTeZn1C45F87WYc6rNVwA9p2URN2pGVWhpqKc7iUgqCZUZEJTB3mj1y66tmDKJVhnozzzvb8",
  "key26": "23yjgGQymjY569bq9T5LSRDLbe7GgQrba5isR2dxMAfJ4x5v5AGVwvP9etDW4cw8JrQAhjuLSSy51ezTTWmLvJUT"
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
