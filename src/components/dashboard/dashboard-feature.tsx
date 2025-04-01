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
    "2rgNP5ttwguzmwiiH5cPRBo5jJhNuvhLgbDxqhRb3tU9Txgy1Dft1MdWcpezbQ7Lr6TV3hhy2XbuNfvT9z3iwUCT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A9oxVGaUjVVU67r4gKQ4wcnd4AFXKtQyoywJSxwVywXSvPGxu36hQpDg2Q8NiXc9MrjpHwAStP6iovC24P2fR6G",
  "key1": "5Bxi5jqiPFFUFq9ogYLEdsrkLocYL7a6S8FFmN7DUtE25h1Fr7YG6Rzja9e7bzp3QoRBPsyr88jmZJVU4YPDF5Ud",
  "key2": "34dM5rtA56fgXcQTptg5NJCbFw3roPoQ6PFqL7GXUhnY68qDEVHgjgNbQEFfARkwrUQnR9yeL5Eb3ZXiGmKKrso3",
  "key3": "2jdFEeZ9susRSerZzf9ohnZmYrAGpmqUDyxHUUHSHvMuhcxGCRjijj13HQvsc3F112XiLg5abtwvWFRRJkekeA96",
  "key4": "4gemZEi11FvaYzZLwsNNj3DwemnV1j62U8pKCaPbFQKEY8NcYLbPSvE6C8r37uZfTFyXrr4E4WuFvEXcpKnt9nsS",
  "key5": "qSiFF5889wifukJKdMooQc6ZYZwz339fqxhXyGnk5B15Jc4cBpStc65C8hnrcijPNDtA2vURtwLRqRe694rESyp",
  "key6": "3jJzTdzdAq96DtRaFMEewxd1DknHSrq6u4sASdw9czqNMmCmTg7gK8yGyXAj4c461479Qsj9zcELiyfUdUWwkbMD",
  "key7": "BB5XKW8gUThwSgw5c9RuZshtWULaHQo6hTnCQE4GEjVwXS6RyPbVabToLZHVhaQXe7q2Q59AyvReuYEY8nQrRrK",
  "key8": "2oxLWcPx8EsRB9Th7DcLT2KF4uGzfDdHvgq7ufbzhEksmrtMHqNekWX5xHdubGdoA1s6y4RafZKFxUi9zG4qycDR",
  "key9": "5A1PECdXQ5swX5J5HWkbyg8qLTqTKazaChpsRBW8DqxcNCzEUPsRQAw7nYXHp86P8z4BwzndimNnNGYs25L8ZGpB",
  "key10": "64es629BfVLECf3wMbHA6x7GbSabyF9AkYuJb5aneUwTL9uorRnPe1WfntyK53fTgaDjxsrXjEjZhEGSNoSt7pBu",
  "key11": "fQuwrDAJRWNUq23TyX975G9QKnoBCJT7BqiZFsB4iHs3VctrRs1X5jfPbWftF37smNUFiZiuYrssVtEWjeJcTvG",
  "key12": "3CoardoEHjQ9FYmjquaFAho1EMo5SEsv4sgwzE2oLzdtZYGyq5L5xNN8XeWyQoCykdxAoSdGCZQgYEomSo4G1fY3",
  "key13": "57S12pXY7omi4fNV5kfgzfMrqFFQYnYmAZ4CW23qxn4eGoH4jB7nHW2zrKWkoftZDSgfR1AzAW5mjbDzvj5GQHTK",
  "key14": "cA3Y5uUvMqzxK9o5VtKkrX2hcVbnztTi4rYGhEpFfBFeuUHCcHTPnLbRaUU7scqJkD1SnvTHxVJWivLYKGLESTc",
  "key15": "2b8tHrfu4RqH3DQdyrzJ2mnvDxtqisQZhW6obkf2iUSk3Eic7rAJZMwTe4VsfFu54fdRRyDUMhHuPd5M9V2ScvEq",
  "key16": "53LxVc5AorrkDBoDyD3uijpX3RLHpD7HDV6m1Zqtz64YA5URqvxPuuUaTxVwRMUUKqGZG66PRvT2xPf2kKxvTqXR",
  "key17": "3Lhg92RJQBMNTuAyxyAY6j2u88FsQvotpLJavtM8qJKoaYnyVwFBbRWHV6TBF9wzwSW5mgKCSKHLJTW4eE1n7jgR",
  "key18": "5c6T1csa4wcDYm3FbgC9eofz4WinZRSwgHDmvWhTtZfAuFDwqB8t2gdsDzRgd8bvtXAg9jAHrFbPijDPXKDLpze3",
  "key19": "2Sxb9vhHARS5hAzKrei51cgTVpyMDedULXdWJmhHwtC7n7cx1ppLmMEQpUEUevZpk7GP474pjQ651Y9QdASywD5u",
  "key20": "2KbBFjKKdVuLN8bXfVNHqfkDFsJHwz7LiFgjDSd1APf1Q7ywWZc93RHmiALPkVzCwpqVE5My3yA8rJcp1Sv9KYyj",
  "key21": "WtunHdm89TvXwuapurcBcZMcoPKBijrcugakY3f24CxTLU62qGDQngxPfDBvCyyCdpUT5gn4mYdSfHEeP3t9PTv",
  "key22": "PoR3b7RiR1f6HxJ7L1sW5BrwcmDi7emcFFyLug4to6qQugUk5TrRpEvZv16DjpNwm1GxNFvBNT48MgLkSHysKhC",
  "key23": "3Sc3rH3kTEdfrvoRyxnAAfAsZbskcjf6qdtibR3FzodnLbNURzWrCX6NHGyfCgiYU3C3g71mtt1T7dedAqURHUbF",
  "key24": "Ucd16CkQqtf2DFeLZ75cTnPVdj2BCcBU1qJHMN5Ly8AD2qzVknCqu1Tt7p9i541A3LvErfKjVB9dAk3Eq8KjcVR",
  "key25": "agg5kerKqbGbUrLAC5KeDSwHJA2x2XQyN8EANhvLqGGRpAXCw5foWNytZqbRR4i9AXJ5fyoUdtfqqg7JjoREUnN",
  "key26": "3hsm6cVCvuS5UMMFBiPRZEP86Jti7UNWdiEmjALdWq1H4L37S8EyvaAbuamo8Q4fozh12LHbM9ujRxGSNsvGYKUd",
  "key27": "4WnUatGDhXsgRCVHKnnRNsg2B83PszbSVAHgJePz3K5W3SgJgoTVKtb82HHcKwC9jJ2vQwNv1KwNjucCnmFC19x6"
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
