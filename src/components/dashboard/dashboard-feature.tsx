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
    "3XEHWsnAViYwrgwfYzvKx8bFVmFDd3q3zCtiePpRd343Vpm1kiZWUjq4qK6UQnnyWuEacwtaQY7MTYYe1FwTfADf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JUoWm3Gc3DbSbVeSC8gihoAfpjD6182GuKGrjRYnCMP3qoCKaR8rcBU1mgEnDar5RFYrzXQkJpZUjnp7VakVt2w",
  "key1": "eokQxrKrzRA1jEWWaRnP2uAHcGf68ywmXoJn9Y7vbNFevWEU3D716QpQ45rF327KVZLV8LrDoAsmYyBBUbRKxib",
  "key2": "32DWEhFXatrrDVwopdmHjTUnN5r9JenpBXSC4VpLuENMjfeCHsvc4RwaabYYfrbzWey9uXKfgm8FnaXzrUeikTo3",
  "key3": "54KhCVCuqgRVCJMsi9QFBHjjY6ceaU3U5vxmkK9jPm7Cq7hDJTFKKsUWdUzSiNL5btzaVpNTDHNJTq6dpH5dgC4f",
  "key4": "3DE6bfVnqWzYjFF6pr3g9n7BuKCVKjWHuLyhPNgLa5yG5L1obDxbcUKyVSKkoqN4jJwUSnjSJkY2z69M2bhmQjHB",
  "key5": "23rZuALxPBmzW9pnPzeoBvnfYYcvT5nqmSPf5rVYffhdL6jTyJChDEnkjKt5MMC7mqPnzKqbBAc9pAnYs8z5kj2q",
  "key6": "iDbU2Tpb98V4uCZBBWgfVmMoMDxn49bHZKVsHaL51YReBX9tr88bU4ZBx3i7gPm2zn7viKJmr1w3pNtGLvrH2sW",
  "key7": "2cio5uuDvLWAdBeTomQtRNfY16BNS2sPMdZ9KcYgTBhgQoQJ7YLtj7Vx3SuW6oBy34yYc2TGAumcLzU88B7cu7qz",
  "key8": "XY3Nc1uLgUTVzBrqboCcGo8jMFriGahR4mxmAuAVZ8ijMvv5vtKfbPs2VzT2DYDGYDsFaUCTU7GfMb8ZnkGjc9w",
  "key9": "RDyL2PnfZB44WQ3HBdNmvrwqe6hpokWAA15HsBGbSKvtojV3C3kGxdhSeDT21Fd9drHaDPyhEctZNCebHZPMS4a",
  "key10": "4A8LSJkuESTR6FF3kuUPLpoY2LT8H32rcsVh5YgtdGoPHggqWZ8Yc4EnqJf2YFJXP1GLPVWTMpc5QcjBTpJPwVRP",
  "key11": "38xHSVbQL3F35SCY28nfhEfHGUkfJfwmLoTH7D62eTfaU84svT9nQmYCQ2AwzYwL5ujVXci73pYW4bhc5oKjxehp",
  "key12": "5iTnpKifjjwk3bVHfyszo5fEUALsN8ZyYkwSWPJn3Vu1aoshQyADfxBLboNgh4MbBMrprLhcNkCk2dMYGNk8oEVR",
  "key13": "2ucBDwmdAnbB9Ra569pt7i96suoiDpo4HDYi2NnsW8NuK2KACsvXC9UsXuFmv1C83YBmr99oXkJ9EnkSX9QF4Wy1",
  "key14": "2ZCC4n5h7LAB4fkyP6Z6hRJMCqoufBWoR1GeoWMS9StAJHsM21mDpwmsdVUDmU1U75rYT3sGVQqKRopCRMAmM4yE",
  "key15": "4SgFEWk9aCcVsLf6k3L5GDKYKmohtRpaV7YJVudjm2ufXJo4mDa8c7RGx61MVopDawQsEdNPJZLdYkc3vt4kTcBm",
  "key16": "u8Dudophn3i5E8esVnBH2Nrui8fu6sXVCaKJpVjrqU5VqymAQz4d5UT2BBBrqS1huBDnhcKYR51zg1fkSr9yQHd",
  "key17": "3ceVRRyXtDPtpAqR1rhGmHn7qiyxovpvTu3X5cBqNKPG4yY5pogcT9E8yYh5LRKEXx13hY6EcBDvthbWw3feAfBe",
  "key18": "2wcPjxczREMgESn1ACBS9CMtvCPXUUBzGGwsnCPfQUz3RLsXhqSdxg34e73kPgQcsmm2tmkZaQpgMWHiCsZf8k4u",
  "key19": "kmRqnDmg9PwCvHnKufgJoCrcP3PV34V2QTs5B6WKR1oPQoLw13Q1na2PfqDLu9iyk8PCNa8ceQje9nvTo2Lngcw",
  "key20": "4XV8KjqFQKdL3FwvdbiuTewtn7LADeN6bUWRFtFe1LcyGzNNLjfvfkvRLRffreWfe4KrbDwcZZb1AT3jj1ydE5Xc",
  "key21": "5G2H2Rtv3tCiV6G4nNBQ4xgpbdv2gpEJw12mD24ubvynuJ77pYcVATta5HTfwANrJwUN1QuDe8DoDsTyrUvdBcbm",
  "key22": "54v4sMLRand9FRHfUHR9TWfPUByGvbUpdE4uG5eTtZJC1MGBN395tGYK1yqLqqZnduzr9WoFG3LPLHKG5ZvSxV6U",
  "key23": "5c2DtAeQbee6A55rmE61RwbFkYYaw27iEpwUwacDbbJgCz4YNapxU6asuxZKqyASzPky2MDnkuQQpRSafqAsGrMD",
  "key24": "2oyVBocRCrBxVcyfmQCWHVP6psB9nWGJzptXPFaQwxLunU9drex4rQKs4jwMs3YY1RTwh4CgzaVcyQhBVx5BdNHt",
  "key25": "4zbV7nHuYkdZY8wGRc5StVyRRXiN9r8zxMoMcKwce9zpYCVjNTFcjRytUCPnVQrz8BAm96o5tGe8ALuUpeLCYMEQ",
  "key26": "5DMD2o124zAUWUhHdtUmGnPK2wDQJQge9CdMUar2rvu8MSKmZDZEvCWSk8y5F9XhpvLssYTq8WVLGE4dqGXxavmQ",
  "key27": "6KXKNCU54GXLE9v4YidcxvUmiwEJPqNJa3ixkmG6ojPq78fPPKAjuV1hjExhKFP7MXvUaf9YVwwa1aSVeY336YT",
  "key28": "5y5acRjgLUAdCq2cbFLnT8pHy4Hg7hiFu2FGmorNzixHJy2R1fB5Z967BTbt7Bjh4yNP4uJFzB8o6JthRSqJfURX",
  "key29": "5J4AP3xH6etZsaW7d9GMXGz1CWBpCUaVmmEBLiU95tBtTKeTrYjNooLpdknTeWc2r3LTP6kj4M2rqJAcdsc1ZKo7",
  "key30": "249oRS3KPCnLfG2g55ncZav8M7a7rtvewZ13QrYfcEeaupbTAjHi3aMV4vZ6S1zQ8dB4aEVvJKpXJQQAoP7xHRQv",
  "key31": "3tqZi9SFk7DCRmQEDkNG6VNkhsphEQwFGgf9HxgvTnsVu81dYGSuz2Rs5aVaDfDctyua1nqcbYa1NJ3p3WBNJzdQ",
  "key32": "27JSxjPCookbuvZx7FcNxsCrWPqv4C2aauCgyprEppigRWzZR1mtadKtw9XGb13VN2Jet5aKY1zHMgu2Nh45MJW5",
  "key33": "4eyqYTcbxzAThqQR9ATS4YivqHGpXnUgQ1SsiPNzGBefs8neEyWkH46pRkspbCZDNq9D1DHSsRn9SEDoLFcNkBMV",
  "key34": "LuCbdJfrS2w6vMEiRvhDuzKwZy4AFFCzJ77UPk47NLTU1jdGYPUfzk1f2bkVrw5EgUXMNTaqcqCvdiBjV67x2Qe",
  "key35": "PpXo9ggQsEpuZM8ukeN5vJvhcDXHtiffZt1Jkyfw6oofybDQbyHhdYULwD3SCUhFxU9XMgTtRDxoZrp6Y1da4mA"
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
