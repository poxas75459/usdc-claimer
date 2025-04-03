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
    "5i7tMiky2BKnamsi48qGrew54ijMnm1cAjKyZdwwBipBtco292qjSZbogf1ziCN5JDnK9pTVsUwHXQAMfrNKyerV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "472wLHqP5SGgCq38SN3TEdjHSUFk3SEqAYu29vZKAprY19r7Hi9q1DqwMSWTrQqa17ToFsYfjx1sPBjtYpFfkemU",
  "key1": "5QKhET8N9cswJiX7WFXmAbnPik3Wtw69mX1fqATYmboSrD5QANLmZmwoxhQH7YUyHLNh1jVnZhyqzUiDx5tMVsWT",
  "key2": "5feAXF9ETwQRHYCbTqaaDQmyUtXVPZ3x6D32NqeCDFjeQHMrGsJrBXM2UDLnUWKqkFQM7GBeYTdW4yq7UxrjS3jc",
  "key3": "2H8vVQ2bqMT3PGQPnuWonE7geSDae6NmfpDzsibhjf7xpibEVb2Kzsw4S5BDmZjwpSHGwmzUzyviwrKGzktw34t4",
  "key4": "4YhJEKFCs2jrCMnTvZdhUdGZc2ZwrBANtq1Rme3VMRB5sNu8rHoYHJ4PvMwMiyo6YdVocdBYcjkZTS8PaCZejNCA",
  "key5": "VVwphX38jWR3MwCJs4rHQx66G653yXZ7EgsvS8zK6cmdSui2PQoCriYmaABXkQyuT59o33pfiSzsMWN8hSKBhRb",
  "key6": "61ze8ARSP7Co1eaQsdHwsWuk6VXtgyEcGH6rdqUuDGhr3Py14CNboEkn4gNLCRHFBBvCPap1N9vi3uYQBkffqPS4",
  "key7": "ZVEeVTcf4JkgD11exF3nXabGcFx6jZfetVCEFuTQJ8gGSgeBV1h5SoR7kdFRroNLofznaqJA5ibP9GtAkKBpgWS",
  "key8": "gSy4xufVBs9711nAiXSRnDXGyLjuUPHogAREtXGTkqFa9BNFY9VVqPgsQSqACoJhTSGMPiBA5bEn4v8nag6p1a4",
  "key9": "4uRZFevJdKn67EYfcp8FPsrWiXd8K8kDCZJ4YWmimt1cuCi7NQ6sND6WTB9Cfh4iHunh4eLfpF1uM6HLStxcXnm2",
  "key10": "61EALVCdpg2ZF86eKqp1Z3dhR7KHU1ft8iJyDFfW6mzd88FtwZfVB9Lk17Mf2BPeqF9p97xkx4J147SogfqBQ8so",
  "key11": "5Cwv6AThi3PbQkCA511WHfBinsyu3G1GEew4rKCtXgEwCvd1HePBNUxE1XUbT2UdwrqVBTndfq4rfv9Fa8ySqEPP",
  "key12": "38pVCudLJ9he4dPfmfp8r8k2iNPBPd6mSVcPsu9na2hB9qkNZnTBR8b6tBFBCCc9N2kwJjuz3oRVg2U4XFtHLPDB",
  "key13": "vkcg9XNdx3dVmPhLtKdBJZTBGSC165XLwtZ5SKSzJrwhUR3WoJ23C762z3KUw6FTUHW6Bcn64A8dVyU2JP34wnW",
  "key14": "2vAgsA1ddVwaptLw4AJW7WRubQQXCpzkpJPQRLxMPYh1gebDmbDkC16DNmdo4kUB9VWW9tzJEexnD52hKcWWYQwa",
  "key15": "5PnhFRL8q1haK7e7Lh7eTu89fzETQZ6An4ZaSZvgo1JopN1H4Ph18QCubEdaW3qPjvvBd264imRiCjQ2iaCqWJdc",
  "key16": "5GcuyxDKPkgS2VjC7QCQJ6ZDHvhFBGM5m9jKAG8hfA8s7NkKQpVW9SGxKytu4dVgE9Ami2Bofv8eyJdPQDxPekYw",
  "key17": "W3HGQHfoAvaBwBkqesQSGqAB77RnjGuWSwV7gNz49Jzx8StaVMrMej4SM4T53ni9K1fTFfwXyMg4fVjMiBpu6ef",
  "key18": "V78Ast8FGAVK281tRcgbpXpRjy8yU1T6DHpYe28557ZCELJG5Ch3NiVJZhUs8zqT1KUEyFrpzwZ1UJ3AkwnpbEy",
  "key19": "3pRpnFxWsVzWevMumLFfqRHL7N1SHCbg6uDcJ177txVwFGdmJLRhZy68cqQcB8fKhrNJTdNLEWvDtFoiuGPh2aHz",
  "key20": "5E635GygyML1i5a3MTefG64TyGmuumu346Ussvq3K868yCs7uZrpd4Rb97vtnjDwBNWDLheuPodQNFdjM1gbo5Ac",
  "key21": "44qZutLj8dorHD7xbHAkfwVWyDLKrs1usoMRY8TyvbHiH5jbGBkuhGyhawB1UubNiHKbBiysqfRvGH9Lb7oDvZcC",
  "key22": "4JNArbk44CFEXGP1omPrntc1R3XrkNbJzuEsLjgWkBG1nJazhj8Ff6KsKnapxUS2Dhz4d5Kf2NkM9iG4B9y2z3eh",
  "key23": "ThyJvg57ujJkLSZLAB4nHf7TeayFuMhRs3hivU3AB7s8LSf3NS7esoPiJmnNyUvnwBHby75bk2cB7DSf1LgDuZC",
  "key24": "BYFy1s1LecDXYba3cEhfCNWemYeiriz6iLpqD8pasdFRJqMM13hLb37xi8CxHGYJSKux9TDeEmdnF2FritGvsTu",
  "key25": "2RCanixFdvvdH5zZiSvz4R7AMfW4viBWkR4UmJuF7UXpbvQa13oGBsxP6KzBrNRDgTrkjmYXFCawbcDmJMpWnmMe",
  "key26": "oLyRm1sDZAMsuCkW26bdKxBX6FW6wWSXv3YtFQhCGmmU7TgBdkrBUFKxFu8BNX1am1NyPTTDVewRU25ez4Hefch",
  "key27": "5hqMBjzPbwxXsAEuCDJrTGebZKcEhcxNUSawZ9FtF7Scvu2FEvKzLn3CBTNYwGXn67Q5Eha45osbSJeFNmhsETNd",
  "key28": "4eVU3oTAhyqtDvsbdXX1NrbsqtxXwvXDowg98yqRHkpffwsQhGToTCv5jHNxWMTGem5Jjy56AM3DerYhPsVBc54j"
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
